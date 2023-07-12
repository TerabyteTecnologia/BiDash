
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonDefault } from "../../../components/ButtonDefault";
import { Input } from "../../../components/Input";
import { Spinner } from "../../../components/Spinner";
import { useAuth } from "../../../contexts/Auth";

import logo from '../../../assets/icons/logoTeraByte.svg';

import { FormData } from "./interface";

import {
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginFormGroup,
  TextRegister
} from "./styles";

export const Login = () => {

  const { isAuthentication, authentication, isLoading } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
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
      "senha": formData.password
    };

    authentication(dataLogin);
  }

  return (
    <LoginContainer>
      <LoginContent>
        <header>
          <img src={logo} />
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

          <LoginFormGroup>
            <Input
              type="password"
              id="password"
              name="password"
              label=""
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              isLogin
            />
          </LoginFormGroup>


          <ButtonDefault
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "Acessar"}
          </ButtonDefault>
        </LoginForm>

        <TextRegister>
          <span>Não tem uma conta?</span> <a href="/register"> Clique aqui</a>
        </TextRegister>
      </LoginContent>
    </LoginContainer >
  );
};