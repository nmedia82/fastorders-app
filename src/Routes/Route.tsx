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
import QRCodePage from "../Pages/QRCode";
import Registers from "../Pages/Registers";
import Discounts from "../Pages/Discounts";

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
    path: `${process.env.PUBLIC_URL}/products/new`,
    element: <AddProduct />,
  },
  {
    path: `${process.env.PUBLIC_URL}/products/:product_id`,
    element: <AddProduct />,
  },
  {
    path: `${process.env.PUBLIC_URL}/categories`,
    element: <ProductCategories />,
  },
  {
    path: `${process.env.PUBLIC_URL}/registers`,
    element: <Registers />,
  },
  {
    path: `${process.env.PUBLIC_URL}/discounts`,
    element: <Discounts />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tables`,
    element: <Tables />,
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
  {
    path: `${process.env.PUBLIC_URL}/qrcode`,
    element: <QRCodePage />,
  },
];
