import SamplePage from "../Pages/Pages/SamplePage";
import { ProductPage } from "../Pages/Products";

export const routes = [
  {
    path: `${process.env.PUBLIC_URL}/sample_page`,
    element: <SamplePage />,
  },
  {
    path: `${process.env.PUBLIC_URL}/products`,
    element: <ProductPage />,
  },
];
