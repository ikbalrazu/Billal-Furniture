import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/about",
        element:<div>About page</div>
      },
      {
        path:"/contact",
        element:<div>Contact page</div>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
