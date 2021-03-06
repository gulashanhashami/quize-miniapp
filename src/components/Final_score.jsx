
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
const Stylediv= styled.div`
.main{
    width:70%;
    height:60vh;
    margin:auto;
    // border: 1px solid red; 
}
.innerd{
    width:85%;
    height:83%;
    margin-top: 10vh;
    padding-top:5%;
    background-color: pink;
    border: 1px solid pink; 
}
.btn{
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
h1{
    font-size:1.5vw;
    color:green;
}

`;
export const FinalScore=()=>{
const navigate=useNavigate();

function goHome(){
    navigate("/")
}
    return (
     <Stylediv>
         <div className="main">
             <div className="innerd">
         <h1>Congratulation!, your assessment has been completed</h1>
        
        <button className="btn" onClick={goHome}>Go to home page</button>
        </div>
        </div>
        </Stylediv>
    )
}