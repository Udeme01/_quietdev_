import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFound from "./pages/NotFound";
import Testimonials from "./pages/Testimonials";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Navigate to="portfolio" replace /> },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "project/:projectId",
          element: <CaseStudyPage />,
        },
        {
          path: "about",
          element: <AboutMe />,
        },
        {
          path: "testimonials",
          element: <Testimonials />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
