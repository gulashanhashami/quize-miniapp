
import styled from "styled-components";

const Stylediv= styled.div`
.main{
    width:70%;
    height:60vh;
    margin:auto;
    border: 1px solid red; 
}

`;
export const FinalScore=()=>{



    return (
     <Stylediv>
         <div className="main">
         <h1>Congratulation!, your assessment has been completed</h1>
        
        <button>Go to home page</button>
        </div>
        </Stylediv>
    )
}