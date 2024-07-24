import DashboardPage from "../Pages/Dashboard/Project";
import SamplePage from "../Pages/Pages/SamplePage";

export const routes = [
    { path: `${process.env.PUBLIC_URL}/pages/sample_page`, element: <SamplePage /> },
    { path: `${process.env.PUBLIC_URL}/dashboard`, element: <DashboardPage /> }
]
