
import {
  createContext,
  useContext,
  useState,
} from 'react';

import { UserInitial, UserProps } from '../../models/User';
import { AuthContextProps, AuthContextProviderType, LoginProps, messageDefaultError } from './interface';

import { getTokenLocalStorage, loginPost, saveTokenLocalStorage } from '../../services/global/endPoints';
import { useToast } from '../../hooks/useToast';


const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderType) {

  const { toast } = useToast();

  const [user, setUser] = useState<UserProps>(UserInitial);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const errorToast = (err: string) => {
    toast.error(err);
  };

  const authentication = async (credentials: LoginProps) => {
    setIsLoading(true);

    try {
      const response = await loginPost(credentials);

      if (response?.data?.situacao) {
        const { access_token, data } = response.data;

        saveTokenLocalStorage(access_token);
        setUser(data);
        return true;
      }

      const { error } = response?.data || {};
      errorToast(error || messageDefaultError);
    } catch (error) {
      errorToast(messageDefaultError);
    }

    setIsLoading(false);
    return false;
  };

  const isAuthentication = !!getTokenLocalStorage(); //token

  return (
    <AuthContext.Provider
      value={{
        authentication: (credentials: LoginProps) => authentication(credentials),
        isLoading,
        user,
        isAuthentication
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};