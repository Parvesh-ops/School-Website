import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Program from "./pages/Program"
import Gallery from "./pages/Gallery"
import Visit from "./pages/Visit"
import Contact from "./pages/Contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "program",
        element: <Program />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "visit",
        element: <Visit />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
