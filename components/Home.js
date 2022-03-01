import React from "react";
import styled from "styled-components";
import image from './rwjms.png';


const Home=()=>{
  return(
    <Wrapper>
        <h1>Welcome to Hospital Portal</h1>
        <p>Re-imagined Technology</p>
        <img src={image} alt="RWJMS"  width="500" length="5000" class="center"/>
    </Wrapper>
  );
};

const Wrapper=styled.div
`
h1{
  font-family: Helvetica;color: #ffffff;
  font-size: 55px; 
  text-align: center; 
  text-transform : uppercase; 
  font-weight : bold; 
  
  text-underline-offset:0.3em;
  text-shadow:#6c757d 2px 2px; 
  padding-top: 2rem;
  
  // text-align:center;
  // font-size:40px;
  // text-underline-offset:0.3em;
  // text-shadow:white 2px 2px;
}
p{
  // color:black;
  // text-align:center;
  font-family: Helvetica;color: #ffffff;
  font-size: 22px; 
  text-align: center; 
  font-style: italic;
  text-shadow:#6c757d 2px 2px; 
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
`;
export default Home;