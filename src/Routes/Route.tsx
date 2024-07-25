import SamplePage from "../Pages/Pages/SamplePage";
import ProductListContainer from "../Pages/Products";
import DashBoard from "../Pages/Dashboards";
import AllOrders from "../Pages/Orders";
export const routes = [
  {
    path: `${process.env.PUBLIC_URL}/dashboard`,
    element: <DashBoard />,
  },
  {
    path: `${process.env.PUBLIC_URL}/orders`,
    element: <AllOrders />,
  },
  {
    path: `${process.env.PUBLIC_URL}/sample_page`,
    element: <SamplePage />,
  },
  {
    path: `${process.env.PUBLIC_URL}/products`,
    element: <ProductListContainer />,
  },
];
