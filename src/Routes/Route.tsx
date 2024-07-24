import DashboardPage from "../Pages/Dashboard/Project";
import SamplePage from "../Pages/Pages/SamplePage";
import Product from "../Pages/Product";

export const routes = [
  {
    path: `${process.env.PUBLIC_URL}/pages/sample_page`,
    element: <SamplePage />,
  },
  { path: `${process.env.PUBLIC_URL}/dashboard`, element: <DashboardPage /> },
  { path: `${process.env.PUBLIC_URL}/products`, element: <Product /> },
];
