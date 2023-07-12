export interface AuthenticationResponseProps {
  access_token: string;
  data: UserProps;
  situacao: boolean;
}

export interface UserProps {
  id: number;
  nome: string;
  email: string;
  permissoes: UserPermissionProps[];
}

export interface UserPermissionProps {
  id: number;
  nome: string;
  createdAt: string;
  updatedAt: string;
}

export const UserInitial = {
  id: 0,
  nome: "",
  email: "string",
  permissoes: []
};