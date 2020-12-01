import React from "react";
import classes from "./Navigation.module.css";
import Auxillary from "../../HOC/Auxillary";
import Logo from "../Logo/Logo"
import NavigationItem from "./NavigationItem/NavigationItem"

function Navigation(){
    return(
        <Auxillary>
            <div className={classes.Navigation}>
            <Logo/>
                <h1 className={classes.Logo}>Hygienic Kitchen</h1> 
                <span className={classes.item}>
                    <NavigationItem to="/Billing">Billing</NavigationItem>
                    <NavigationItem to="/Orders">Orders</NavigationItem>
                </span>                     
            </div>
        </Auxillary>
    )
}

export default Navigation;