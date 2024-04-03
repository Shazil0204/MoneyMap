import "./index.css";
import {
  ReactDOM,
  React,
  App,
  Home,
  About,
  Sign_in,
  Sign_up,
  Services,
  createBrowserRouter,
  RouterProvider,
} from "./Components/main_imports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "Sign_up",
    element: <Sign_up />,
  },
  {
    path: "Sign_in",
    element: <Sign_in />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
