import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import NotFound from './pages/NotFound';
import ErrorPage from './pages/error-page';
import Posts from './pages/singlePostPage';
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const AppPage = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <NotFound/>,
    
  },

  {
    path:"posts/:id",
    element:<Posts/>,
    errorElement: <ErrorPage/>,
  },
   
])




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AppPage}/>
  </React.StrictMode>
)
