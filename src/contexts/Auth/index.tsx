import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { mockedUserCredentials } from './mock';

type UserProps = {
  id: number;
  name: string;
  email: string;
  password: string;
} | null;

type AuthProviderValueProps = {
  authenticated: boolean;
  user: UserProps;
  loading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthProviderValueProps>({
  authenticated: false,
  user: { id: 0, name: '', email: '', password: '' },
  login: () => ({}),
  logout: () => ({}),
  loading: false
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    const loggedUser = {
      id: 111,
      name: 'diego',
      email,
      password
    };

    console.log('login auth', { email, password });

    if (
      email === mockedUserCredentials.email &&
      password === mockedUserCredentials.password
    ) {
      localStorage.setItem('user', JSON.stringify(loggedUser));
      setUser(loggedUser);
      navigate('/');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const authProviderValue: AuthProviderValueProps = {
    authenticated: !!user,
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
