
import styled from "styled-components"

const Stylediv= styled.div`
.main1{
    width:90%;
    height:60vh;
    margin-top:15vh;
    // border:1px solid red;
}
.main{
    width:50%;
    height:50vh;
    margin:auto;
    padding:4%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    // border:1px solid grey;
}
.section{
    display:flex;
    flex-direction:row;
    margin-top:7%;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:15%;
    
    // border:1px solid red;
}
.ass{
    width:50%;
    color:white;
    height:90%;
    padding-bottom:2%;
    background-color: black;
    border-radius: .3vw;
    border:1px solid grey;
}
p{
    
    font-size:1.3vw;
}
.btn{
    width:11vw;
   padding:4%;
   color:white;
   font-size:1vw;
   background-color: green;
   border:.2vw solid green;
   border-radius: .3vw;
}
.btn:hover{
    color:red;
    background-color: white;
}
`;
export const Home=()=>{


return (
    <Stylediv>
        <div className="main1">
  <div className="main">
  <div className="section">
  <div className="ass">
       <p>Assesment1</p>
   </div><span><button className="btn">Start test</button></span>
  </div>
   <div className="section">
   <div  className="ass">
       <p>Assessment2</p>
   </div><span><button className="btn">Start test</button></span>
   </div>
  </div>
  </div>
    </Stylediv>
)
};