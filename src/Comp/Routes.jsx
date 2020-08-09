import React from "react";
import { Switch, Route } from "react-router-dom";
import Homedata from "../Home/homedata";
import About from "../about/about";
import Navi from "./nav";
import FilmData from "../filmlist/film";

export default function App() {
  return (
    <>

      <Navi />
      <Switch>
        <Route exact path="/">
          <Homedata />
        </Route>

        <Route path="/About">
          <About start={200} />
        </Route>

        <Route path="/film">
          <FilmData />
        </Route>

      </Switch>

    </>
  );
}