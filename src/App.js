import React from 'react';

import react from './assets/react.png';
import electron from './assets/electron.png';

import './App.scss';



const App = () => {


  return (

    <div className="App">

      <img src={react} className="imgApp" alt='React Logo' width='200' height='200' />

      <p>+</p>

      <img src={electron} className="imgApp" alt='Electron Logo' width='200' height='200' />

    </div>

  );
};



export default App;