
import React from "react"
import { Link } from "react-router-dom";
import "../App.css"
// import { ThemeContext } from "./ThemeContext";


const Navi = () => {
  //   const [theme] = useContext(ThemeContext)
  return (
    // <nav style={{background: theme === "dark" ? "navy" : ""}}>


    <header className="header">
      <Link to="/" className="normal">
        <img alt="logo" className="logo" src={require('../bground/logo1.png')} width="150px" />
      </Link>
      <div className="header-right">
        <Link to="/" className="normal"  >Home</Link>
        <Link to="/About" className="normal">About</Link>
        <Link to="/film" className="normal">Movie List Editor </Link>
      </div>

      {/* <a className="active" href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="contact.html">Movie List Editor</a> */}

    </header>


  )
}

export default Navi