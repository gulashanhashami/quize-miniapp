


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
    padding-top:5%;
    margin-top: 10vh;
    background-color: pink;
    border: 1px solid pink; 
}
.btn{
    margin-top: 10vh;
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
export const FirstComp=()=>{
const navigate=useNavigate();

function goHome(){
    navigate("/")
}
    return (
     <Stylediv>
         <div className="main">
             <div className="innerd">
         <h1>Congratulation!, your assessment1 has completed, please start assessment2</h1>
        
        <button className="btn" onClick={goHome}>Go to home page</button>
        </div>
        </div>
        </Stylediv>
    )
}