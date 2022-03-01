import React from "react";
import styled from "styled-components";

const Home=()=>{
  return(
    <Wrapper>
    <h1>Welcome to the Hospital Portal</h1>
    <p>Re-imagned Technology</p>      
    <a href = "https://rutgershealth.org/location/robert-wood-johnson-university-hospital">
    <img width="1000" src="https://rutgershealth.org/sites/default/files/RWJ%20University%20Hospital%20New%20Brunswick.png" alt="RWJMS" class="center"/></a>
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