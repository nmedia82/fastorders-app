import SamplePage from "../Pages/Pages/SamplePage";
import ProductListContainer from "../Pages/Products";
import DashBoard from "../Pages/Dashboards";
import AllOrders from "../Pages/Orders";
import Tables from "../Pages/Table";
import AddProduct from "../Pages/AddProduct";
import POSHome from "../Pages/POS";
import AddCustomers from "../Pages/Customers";
import ProductCategories from "../Pages/Categories";
import AllEmployees from "../Pages/Employees";

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
  {
    path: `${process.env.PUBLIC_URL}/categories`,
    element: <ProductCategories />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tables`,
    element: <Tables />,
  },
  {
    path: `${process.env.PUBLIC_URL}/add-product`,
    element: <AddProduct />,
  },
  {
    path: `${process.env.PUBLIC_URL}/customers`,
    element: <AddCustomers />,
  },
  {
    path: `${process.env.PUBLIC_URL}/pos`,
    element: <POSHome />,
  },
  {
    path: `${process.env.PUBLIC_URL}/employees`,
    element: <AllEmployees />,
  },
];
