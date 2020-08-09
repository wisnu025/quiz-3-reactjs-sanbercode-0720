import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Film from './filmlist/film';
// // import Navi from './Comp/nav';
// // import Homedata from './Home/homedata';
// // import Formfilm from './filmlist/formfilm';
// // import Film from './filmlist/film';
// // import DaftarFIlmList from './filmlist/listfilm';
// import FilmData from './filmlist/film';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from './Comp/Routes';
// import Formfilm from './filmlist/formfilm';
// import About from './about/about';

function App() {

  return (
    <Router>
      <Routes />
    </Router>
  );
}


export default App;
