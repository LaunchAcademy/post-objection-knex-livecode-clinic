import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import BoardGamesIndex from "./BoardGamesIndex"
import BoardGamesShow from "./BoardGamesShow"

import "../assets/scss/main.scss"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BoardGamesIndex} />
        <Route exact path="/boardgames" component={BoardGamesIndex} />
        <Route exact path="/boardgames/:id" component={BoardGamesShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
