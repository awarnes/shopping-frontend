import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextType, User } from '../types/@types.auth';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = (props: any) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const signIn = async (user: User) => {
    setUser(user);
    navigate(`/user/${user.id}/shopping`);
  };

  const signOut = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  return <AuthContext.Provider value={{user, signIn, signOut}}>{props.children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
