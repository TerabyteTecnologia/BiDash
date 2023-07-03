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

  background: ${props => props.theme["gray-700"]};

  header {
    position: relative;
    padding-bottom: 0.3125rem;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      width: 0.188rem;
      height: 100%;

      background: ${props => props.theme["background-btn"]};
      border-radius: 0.313rem;
    }

    margin-bottom: 2.5rem;

    p, span {
      margin-left:0.625rem;
    }

    p {
      color: ${props => props.theme["white"]};
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.813rem;
    }

    span {
      line-height: 1.0625rem;
      color: ${props => props.theme["gray-400"]};
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

  margin-bottom: 3.125rem;
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

