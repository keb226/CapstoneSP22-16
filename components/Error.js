/*This page is added if the user manipulates the web address http://localhost:3000/xx then they would land in this page*/
import styled from "styled-components";
const Error=()=>{
  return(
    <Wrapper>
      <p>Error: Page does not exist!</p>
    </Wrapper>
  );
};
const Wrapper = styled.div `

p{
  color:black;
  text-align:center;
  font-size:40px;
}
`;
export default Error;