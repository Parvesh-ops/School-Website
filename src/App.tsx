import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from '../src/pages/Home'
import About from "./pages/About"
import Program from "./pages/Program"


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
