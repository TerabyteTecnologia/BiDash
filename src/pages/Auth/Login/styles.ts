import styled from "styled-components";

export const LoginContainer = styled.div`
  background: ${props => props.theme["gray-900"]};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const LoginContent = styled.div`
  width: 26.25rem;
  box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
  
  padding: 1.875rem 1.25rem;
  border-radius: 0.5rem;

  background: ${props => props.theme["gray-800"]};

  header {
    position: relative;
    padding-bottom: 0.3125rem;

    margin-bottom: 2.5rem;

    text-align: center;

    img {
      width: 9.375rem;
      height: auto;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin-bottom: 0.938rem;
`;

export const LoginFormGroup = styled.div`
  display: flex;
  flex-direction: column ;
`;

export const TextRegister = styled.div`
  display: flex;
  margin-top: 3.125rem;

  justify-content: center;

  text-align: center;

  a {
    text-decoration: none;
    padding-left: 0.313rem;
    color: #32ABEB;
  }
`

