import Loadable from "react-loadable";
import Loading from "../components/Loading";

const ProductsPage = Loadable({
  loader: () => import("../pages/Products"),
  loading: Loading,
});
const OverviewPage = Loadable({
  loader: () => import("../pages/Overview"),
  loading: Loading,
});
const CreateEditProductPage = Loadable({
  loader: () => import("../pages/CreateEditProduct"),
  loading: Loading,
});
const Categories = Loadable({
  loader: () => import("../pages/Categories"),
  loading: Loading,
});
const LoginPage = Loadable({
  loader: () => import("../pages/AdminLogin"),
  loading: Loading,
});
const AccountPage = Loadable({
  loader: () => import("../pages/Account"),
  loading: Loading,
});

export const routes = [
  {
    element: <LoginPage />,
    path: "/admin/login",
  },
];
export const privateRoutes = [
  {
    element: <AccountPage />,
    path: "/admin/accounts",
  },
  {
    element: <ProductsPage />,
    path: "/admin/products",
  },
  {
    element: <CreateEditProductPage />,
    path: "/admin/product/create",
  },
  {
    element: <OverviewPage />,
    path: "/admin/",
  },
  {
    element: <OverviewPage />,
    path: "/admin/overview",
  },
  {
    element: <Categories />,
    path: "/admin/category",
  },
];
export { ProductsPage, OverviewPage, Categories };
export default routes;
