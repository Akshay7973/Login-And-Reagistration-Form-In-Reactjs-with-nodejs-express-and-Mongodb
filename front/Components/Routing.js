import React from 'react'
import Reg from "./Reg"
import Regdetail from "./Regdetail"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
const Routing = () => {
    return (
        <div>
         <Router>
          <Switch>
            <Route path="/" component={reg} exact />
            <Route path="/getuser" component={Regdetail} />
          </Switch>
      </Router>
        </div>
    )
}

export default Routing
