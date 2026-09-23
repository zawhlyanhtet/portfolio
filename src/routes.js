import { createBrowserRouter } from "react-router";
import ErrorPage from "./scenes/error/ErrorPage";
import HomePage from "./scenes/home/HomePage";
import ClientStoreCaseStudyPage from "./scenes/work/case-studies/client-store/ClientStoreCaseStudyPage";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "work/client-store-management",
        Component: ClientStoreCaseStudyPage,
      },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;
