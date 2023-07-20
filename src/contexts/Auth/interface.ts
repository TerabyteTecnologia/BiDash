import { UserProps } from "../../models/User";

export interface AuthContextProps {
  authentication: (data: LoginProps) => void;
  handleLogout: () => void;
  isLoading: boolean;
  user: UserProps;
  isAuthentication: boolean;
}

export interface AuthContextProviderType {
  children: React.ReactNode;
}

export interface LoginProps {
  email: string;
  senha: string;
}

export const messageDefaultError = "Ocorreu um erro interno no servidor da API. Por favor, tente novamente mais tarde ou entre em contato com o suporte técnico.";