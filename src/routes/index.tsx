import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes,
  Navigate
} from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import PaymentsPage from 'pages/PaymentsPage';

import { AuthProvider, AuthContext } from 'contexts';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function Routes() {
  const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <ReactRouterRoutes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <PaymentsPage />
              </PrivateRoute>
            }
          />
        </ReactRouterRoutes>
      </AuthProvider>
    </Router>
  );
}
