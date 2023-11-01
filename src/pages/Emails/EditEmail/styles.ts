import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
width: 100%;
min-height: 100px;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
font-size: 16px;
`;

export const FormContainer = styled.div`
   margin-left: 1rem;
   margin-right: 3rem;
   margin-top: 2rem;
   max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;


`;

export const ConterinerInputs = styled.div`
  width: 100%;  
  margin-bottom:0.6rem; 
  h1{
  
  }
  span{
    color:red;
    margin-bottom:0.2rem;
  }
 
`


export const Button = styled.button`
  padding: 10px 20px;
  background-color:${props => props.theme["gray-800"]};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top:1rem;
  margin-right: 1rem; 
  &:hover {
    background-color: ${props => props.theme["gray-500"]}
  }
`;