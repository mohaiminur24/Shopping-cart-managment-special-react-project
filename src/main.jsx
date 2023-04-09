import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './Components/Shoplayout/Shop'
import Review from './Components/Reviewlayout/Review'
import Checkout from './Components/Checkoutlayout/Checkout'
import Phonehunter from './Components/Phonehunter/Phonehunter'
import PhoneDetails from './Components/Phonehunter/PhoneDetails'
import Store from './Components/StoreLayout/Store'
import ErrorPage from './Components/ErrorPage'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element: <Shop/>,
      },
      {
        path:"/review",
        element: <Review/>,
      },
      {
        path:"/checkout",
        element: <Checkout/>,
      },
      {
        path:"/phone",
        element: <Phonehunter/>
      },
      {
        path:"/store",
        element: <Store/>,
        loader: ()=> fetch("store.json")
      },
      {
        path: "/phone/:id",
        element: <PhoneDetails/>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/phone/${params.id}`),
      }
    ]
  }
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
