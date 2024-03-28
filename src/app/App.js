import './App.css'
import React from 'react';
import { LandingPage } from './pages/Landing/index';
import { LoginPage } from './pages/login/index';
import { DashboardPage } from './pages/dashboard';
import { ToastContainer } from 'react-toastify';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {IsProtectedRoute} from './hoc/IsProtectedRoute'
import {routes }from '../utilis/routes';
// import { useNavigation } from './hooks/useNavigation';
// import { Login } from './components/login';


const router = createBrowserRouter([
  {
    path: '',
    element: (<IsProtectedRoute>
      <LandingPage/>
    </IsProtectedRoute>)
  },
  {
    path: routes.dashboard(),
    element: <IsProtectedRoute><DashboardPage/></IsProtectedRoute>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  // {
  //   path: 'dashboard',
  //   element: <DashboardPage/>
  // },
  {
    path: '*',
    element: <h1>404</h1>
  }
]);

export function App(){
  return <>
  <ToastContainer/>
  <RouterProvider router={router}/>
  </>
}

//   useNavigation()
//   return (
//     <div>
      
//       <LoginPage/>
//       <LandingPage/>
//       <DashboardPage/>
//     </div>
//   );
// }

// export default App;
{/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" rel="stylesheet"> */}

// export default function App(){
//   return 
//   useNavigation()
//   return (
//     <div>
      
//       <LoginPage/>
//       <LandingPage/>
//       <DashboardPage/>
//     </div>
//   );
// }


// export default function App() {
//   const [url]= useNavigation()
//   switch (url){
//     case '/login':
//       return <LoginPage/>
//     default: 
//       return <LandingPage/>
//       break;
//   }
// }