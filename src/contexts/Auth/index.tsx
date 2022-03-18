import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

type UserProps = {
  email: string;
  password: string;
} | null;

type AuthProviderValueProps = {
  authenticated: boolean;
  user: UserProps;
  login: (email: string, password: string) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthProviderValueProps>({
  authenticated: false,
  user: { email: '', password: '' },
  login: () => ({}),
  logout: () => ({})
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>(null);

  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    console.log('login auth', { email, password });

    if (email === 'usuario@gmail.com' && password === 'usuario') {
      setUser({ email, password });
      navigate('/');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  const authProviderValue: AuthProviderValueProps = {
    authenticated: !!user,
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
