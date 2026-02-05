
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
import News from "./pages/News"
import NewsDetail from "./pages/NewsDetail"
import { ThemeProvider } from "./context/ThemeContext"

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
      {
        path: "news/:id",     //for singlepage
        element: <NewsDetail />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
