import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Auth/Login";
import HomePage from "./pages/home/HomePage";

const Routes = () => {
    return (

        <Switch>
           

            <Route exact path="/">
                <HomePage />
            </Route>
            {/*     <Route exact path="/">
                <Login />
            </Route>
 */}          
            <Route exact path="/customers">
                <h1>Customers Page</h1>
            </Route>
            <Route exact path="/diagrams">
                <h1>Diagrams Page</h1>
            </Route>
            <Redirect to="/" />
        </Switch >
    );
};

export default Routes;
