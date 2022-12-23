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
    path: "/login",
  },
];
export const privateRoutes = [
  {
    element: <AccountPage />,
    path: "/accounts",
  },
  {
    element: <ProductsPage />,
    path: "/products",
  },
  {
    element: <CreateEditProductPage />,
    path: "/product/create",
  },
  {
    element: <OverviewPage />,
    path: "/",
  },
  {
    element: <OverviewPage />,
    path: "/overview",
  },
  {
    element: <Categories />,
    path: "/category",
  },
];
export { ProductsPage, OverviewPage, Categories };
export default routes;