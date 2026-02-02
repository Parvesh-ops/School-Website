import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from '../src/pages/Home'
import About from "./pages/About"
import Program from "./pages/Program"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: < Home/>
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'program',
          element: <Program />
        },
        {
          path: 'gallery',
          element: <Gallery />
        },
        {
          path: 'contact',
          element: <Contact />
        },

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
