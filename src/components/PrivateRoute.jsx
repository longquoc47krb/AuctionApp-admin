import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/admin/login" />;
}
export default PrivateRoutes;
