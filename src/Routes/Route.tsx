import SamplePage from "../Pages/Pages/SamplePage";
import ProductListContainer from "../Pages/Products";
import DashBoard from "../Pages/Dashboards";
import AllOrders from "../Pages/Orders";
import Tables from "../Pages/Table";
import POSHome from "../Pages/POS";
import AddCustomers from "../Pages/Customers";
import ProductCategories from "../Pages/Categories";
import AllEmployees from "../Pages/Employees";
import OrderInvoice from "../Pages/Orders/Invoice";
import OrdersHistory from "../Pages/Orders/History";
import AddProduct from "../Pages/Products/AddProduct";

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
    path: `${process.env.PUBLIC_URL}/orders-history`,
    element: <OrdersHistory />,
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
    path: `${process.env.PUBLIC_URL}/products/new`,
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
  {
    path: `${process.env.PUBLIC_URL}/invoice/:order_id`,
    element: <OrderInvoice />,
  },
];
