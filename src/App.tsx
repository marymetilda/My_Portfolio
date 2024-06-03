import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/skills", element: <Skills /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
