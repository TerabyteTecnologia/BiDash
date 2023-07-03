
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonDefault } from "../../../components/ButtonDefault";
import { Input } from "../../../components/Input";
import { Spinner } from "../../../components/Spinner";
import { useAuth } from "../../../contexts/Auth";
import { FormData } from "./interface";

import {
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginFormGroup,
  TextRegister
} from "./styles";


export const Login = () => {

  const { isAuthentication, login } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    email: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthentication)
      navigate("/");
  }, [isAuthentication]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const dataLogin = {
      "email": formData.email,
    };

    login(dataLogin);

  }

  return (
    <LoginContainer>
      <LoginContent>
        <header>
          <p> Bem Vindo</p>
          <span>Insira o e-mail utilizado no cadastro</span>
        </header>

        <LoginForm onSubmit={handleSubmit}>
          <LoginFormGroup>
            <Input
              type="email"
              id="email"
              name="email"
              label=""
              placeholder="Seu e-mail de cadastro"
              value={formData.email}
              onChange={handleChange}
            />
          </LoginFormGroup>

          <ButtonDefault
            type="submit"
          // disabled={loginMutation.isLoading}
          >
            Acessar

            {/* {loginMutation.isLoading ? <Spinner /> : "Acessar"} */}
          </ButtonDefault>
        </LoginForm>

        <TextRegister>
          <span>Não tem uma conta?</span> <a href="/register"> Clique aqui</a>
        </TextRegister>
      </LoginContent>
    </LoginContainer >
  );
};