import Loadable from "react-loadable";
import Loading from "../components/Loading";

const ProductsPage = Loadable({
  loader: () => import("../pages/Products"),
  loading: Loading,
});
const RequestWithdrawPage = Loadable({
  loader: () => import("../pages/RequestWithdrawList"),
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
  {
    element: <RequestWithdrawPage />,
    path: "/dashboard/reconcile/success",
  },
];
export const privateRoutes = [
  {
    element: <AccountPage />,
    path: "/accounts",
  },
  {
    element: <RequestWithdrawPage />,
    path: "/request-withdraw",
  },
  {
    element: <RequestWithdrawPage />,
    path: "/request-withdraw/success",
  },
  // {
  //   element: <RequestWithdrawPage />,
  //   path: "/dashboard/reconcile/success",
  // },
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
    path: "/overview",
  },
  {
    element: <OverviewPage />,
    path: "/",
  },
  {
    element: <Categories />,
    path: "/category",
  },
];
export { ProductsPage, OverviewPage, Categories };
export default routes;
