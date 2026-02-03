import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Portfolio />,
        },
        {
          path: "about",
          element: <AboutMe />,
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
