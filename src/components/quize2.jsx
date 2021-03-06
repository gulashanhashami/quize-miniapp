

import { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
const Stylediv= styled.div`

font-family: 'Source Sans Pro', sans-serif;
margin: 0;
color: #333;
.outdiv{
  margin: 0 auto;
  max-width: 70%;
  height:70vh;
  // padding-top:10vh;
  // border: 1px solid red; 
}
.main-ui {
    max-width: 100%;
    padding-top:5%;
    margin-top: 10vh;
    height:80%;
    background-color: pink;
    // border: 1px solid red; 
  }
  
  .our-form {
    display: flex;
    justify-content: center;
  }
  
  .problem {
    font-size: 5rem;
    margin: 0;
    text-align: center;
  }
 
  
  .reset-button {
    font-size: 1.2rem;
    background-color: #004094;
    border: none;
    color: #FFF;
    border-radius: 7px;
    padding: 12px 20px;
    display: inline-block;
    outline: none;
    cursor: pointer;
  }
  
  .reset-button:hover {
    background-color: #00367e;
  }
  
  .reset-button:focus {
    background-color: #00275a;
  }
  h1{
    font-size:1.5vw;
    color:green;
}
`;

export const Quize2=()=>{
  var c=0;
  var c1=0;
const [problem, setProblem]= useState("")
const [field, setField]= useState()
const [cdata, setCdata] = useState({});
const [total_time, setTtime]= useState(400);
const [time, setTime]= useState(20); 
const navigate= useNavigate();

let id;
let id1;
var arr=[];
let state = {
  score: 0,
  wrongAnswers: 0
}

//code for total assessment time limit
    useEffect(()=>{
        updateProblem(); 
        id1=setInterval(()=>{
          setTtime((prev)=>{
              if(prev===0.00){
                navigate("/final")
               
                  clearInterval(id1);
                  clearInterval(id);
                 
                  return(
                    <p style={{color:"red", fontSize:"1.5vw"}}>contest ended</p>
                  );
              }
              return prev-1;
          })
          
          }, 1000);
          return ()=> {
              clearInterval(id1);
              clearInterval(id);
            
          }
       
    },[])
//code for one question time limit
    useEffect(()=>{
      id=setInterval(()=>{
        setTime((prev)=>{
            if(prev===0){
               prev=20
                  updateProblem()
                
            }
            return prev-1;
        })
        
        }, 1000);
        return ()=> {
            clearInterval(id);
        }
    }, [])


   
     //code for update problem
    function updateProblem() {

      state.currentProblem = generateProblem()
      setCdata(state.currentProblem)

      setProblem(`${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`)
     
    }
    
  function score(){
    c++
  }


    function generateNumber(max) {
      return Math.floor(Math.random() * (max + 1))
    }
     //code for generate problem
    function generateProblem() {
      
      return {
        numberOne: generateNumber(10),
        numberTwo: generateNumber(10),
        operator: ['+', '-', 'x'][generateNumber(2)]
      }
    }
 //code for handle submit
    function handleSubmit(e) {
      e.preventDefault()
      updateProblem()
      setTime(20);
      
      let correctAnswer
      if (cdata.operator == "+") correctAnswer = cdata.numberOne + cdata.numberTwo
      if (cdata.operator == "-") correctAnswer = cdata.numberOne - cdata.numberTwo
      if (cdata.operator == "x") correctAnswer = cdata.numberOne * cdata.numberTwo
     
      if ((+field)=== correctAnswer) {
        alert("Your answer is correct")
   } else {
      alert("Your answer is wrong")
   }
    }
    

return (
    <Stylediv>
      <div className="outdiv">
        <h1>Assessment2 is running</h1>
     <div className="main-ui">
       <p>Total time :{(total_time/60).toFixed(2)} minutes</p>
       <p>Time :{time} seconds</p>
  <p className="problem">{problem}</p>

  <form className="our-form" onSubmit={handleSubmit}>
    <input type="text" className="our-field" onChange={(e)=>{setField(e.target.value)}} placeholder="enter your answer" />
    <button>Submit</button>
  </form>
   <br />
   <button className="reset-button" onClick={()=>{
      let res=window.confirm("Are you sure, you want to reset it")
      if(res){
   clearInterval(id);
   clearInterval(id1);
   setTtime(400)
   setTime(20)
   updateProblem()
   }
  }
   }>Reset the Assessment</button>
</div>
</div>
    </Stylediv>
)
}