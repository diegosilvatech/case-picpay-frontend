import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route
} from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import PaymentsPage from 'pages/PaymentsPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}
