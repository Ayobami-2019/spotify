
import React from 'react';
import { LandingPage } from './pages/Landing/index';
import { LoginPage } from './pages/login/index';
// import {Login}
import { useNavigation } from './hooks/useNavigation';

export default function App() {
  const [url]= useNavigation()
  switch (url){
    case '/login':
      return <LoginPage/>
    default: 
      return <LandingPage/>
      break;
  }
}
//   useNavigation()
//   return (
//     <div>
      
//       <LoginPage/>
//       <LandingPage/>
//     </div>
//   );
// }

// export default App;
{/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" rel="stylesheet"> */}