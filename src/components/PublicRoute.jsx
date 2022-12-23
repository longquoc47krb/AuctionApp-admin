import { Outlet, Navigate } from "react-router-dom";

function PublicRoute({ isAuth }) {
  return isAuth ? <Navigate to="/admin" /> : <Outlet />;
}
export default PublicRoute;
