import React from "react";
import classes from "./App.module.css"
import Billing from "./components/Billing";
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import Orders from "./components/Orders/Orders";
function App(){
  return(
    <div>
      <Navigation className={classes.Navigation}/>
      <Route path="/Billing" component={Billing}/>
      <Route path="/Orders" component={Orders}/>

    </div>
  )
}

export default App;
