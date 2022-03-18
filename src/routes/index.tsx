import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes
} from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import PaymentsPage from 'pages/PaymentsPage';

export default function Routes() {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PaymentsPage />} />
      </ReactRouterRoutes>
    </Router>
  );
}
