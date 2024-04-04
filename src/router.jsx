import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AboutMe from "./components/aboutMe/AboutMe.jsx";
import Contact from "./components/contact/Contact.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/about", element: <AboutMe /> },
    { path: "/contact", element: <Contact /> },
  ]);