import React, { useState } from 'react';


import Main from './Screens/Main/Main'
import Splash from './Screens/SplashScreen/SplashScreen'




export default function App() {

  const [timePassed, setTimePassed] = useState(false);

  setTimeout(() => { setTimePassed(true) }, 5000)

  return (


    timePassed === false ? <Splash /> : <Main />



  );
}


