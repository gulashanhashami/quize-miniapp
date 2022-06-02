
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbardiv=styled.div`
#maind{
    font-family: sans-serif;
  }
  
  #navbar {
      margin: auto;
      width: 100%;
      height: auto;
      /* border: 1px solid grey; */
    }
    #navbar1 {
        margin: auto;
        width: 90%;
        height: 7.5vh;
        align-items: center;
        display: flex;
        justify-content: space-between;
        background-color: white;
        //  border: 1px solid grey;
        // position: sticky;
        top: 0;
      }
      #topn{
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        
      }
      #topn1{
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:rgba(249, 249, 249, 255) ;
        // background-color: grey; 
        
      }
      .ltop{
        color: white;
        
        font-size: 1vw;
        font-weight: 650;
        /* float: left; */
        align-items: center;
      }
      #ltop1{
        margin-left: 6%;
      }
      #ltop2{
        margin-right: 6%;
      }
      #topn12{
        margin-left: 6%;
        width: 36%;
        font-size: 1.2vw;
        height: 5vh;
        display: flex;
        color: grey;
        justify-content: space-between;
        align-items: center;
        //  border: 1px solid red; 
      }
      #topn13{
        margin-right: 6%;
        width: 16%;
        height: 5vh;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    //    border: 1px solid red; 
      }

`;

export const Navbar=()=>{

    return (
        <Navbardiv> 
        <div id="maind">
            <div id="topn">
              <p id="ltop1" className="ltop">Welcome to our site <span style={{color:"red"}}>WELCOME</span></p>
              <p id="ltop2" className="ltop">Give your assessment |<span>Thank You </span><span style={{color:"red"}}>Signin</span></p>
            </div>
            <div id="topn1">
                <div id="topn12">
                   <p>Find assessment</p> 
                   <p>Check all sections</p>
                   <p>See all assessment</p>
                </div>
                <div id="topn13">
                    <Link to={""}>
                   {/* <p className="pin">Enter Pincode</p>  */}
                   </Link>
                   <p className="pin" style={{color:"red"}}>Make future better</p>
                </div>
            </div>
            </div>
    </Navbardiv>
    )
}