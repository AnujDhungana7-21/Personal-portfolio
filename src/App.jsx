import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootElements from "./components/RootElements";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Portfolio } from "./page/Portfolio";
import { Skills } from "./page/Skills";
import { Contact } from "./page/Contact";
const router = createBrowserRouter([
  {
    element: <RootElements />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Portfolio",
        element: <Portfolio />,
      },
      {
        path: "Skills",
        element: <Skills />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
