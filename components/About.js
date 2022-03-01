import React from "react";
import styled from "styled-components";

/*This component is mainly built to describe the goals of the project and tools that were used*/
const About=()=>{
  return(
    <Wrapper>
      <div class="row">
        <h1>About Contactless Desktop</h1>
      </div>
      <div class="row col">
        <p>The Contactless Desktop allows for a safe and easy check-in experience for both patients and doctors in hospitals to reduce wait times and hassles.</p>
      </div>
          <div class="row">
            <div class="col-6">
              <l class ="heading">Developers</l>
                <ul class="name">
                  <li>Nitya Sathish</li>
                  <li>Seyma</li>
                  <li>Sahreen</li>
                  <li>Kyle</li>
                  <li>Angelica</li>
                </ul>
            </div>
            <div class="col-6">
              <l class="heading2">Software Tools</l>
              <ul class="tools">
                  <li>Node.js React</li>
                  <li>Python</li>
                </ul>
            </div>
          </div>

    </Wrapper>
  );
};
const Wrapper = styled.div `
  h1{
    font-family: Helvetica;color: #ffffff;
    font-size: 50px; 
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
    font-family: Helvetica;color: #202020;
    font-size: 22px; 
    text-align: center; 
    font-style: italic;
    //text-shadow:#6c757d 2px 2px; 
    word-wrap: normal;
    padding-top: 2rem;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 1.5rem;
  }
  
  l.heading{
    font-size: 25px;
    font-weight: 640;
    text-decoration: underline;
    padding-left: 23.5rem;
  }
  
  l.heading2{
    font-size: 25px;
    font-weight: 640;
    text-decoration: underline;
    padding-left: 11.5rem;
  }
  
  ul.name{
    list-style-type: square;
    font-size: 20px;
    padding-left: 25rem;
    padding-top: 0.5rem;
    text-algin: center;
  }
  
  ul.tools{
    list-style-type: square;
    font-size: 20px;
    padding-left: 13rem;
    padding-top: 0.5rem;
    text-algin: center;
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  `;
  export default About;