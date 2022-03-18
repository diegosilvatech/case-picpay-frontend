import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCredentials } from 'core/services';

type UserProps = {
  id: number;
  name: string;
  email: string;
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
  user: { id: 0, name: '', email: '' },
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

  const login = async (email: string, password: string) => {
    const response = await getCredentials();
    const account = response.data[0];

    const hasValidCredentials = (email: string, password: string) => {
      return account.email === email && account.password === password;
    };

    const loggedUser = {
      id: account.id,
      name: account.name,
      email: account.email
    };

    if (hasValidCredentials(email, password)) {
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
