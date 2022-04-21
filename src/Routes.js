import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Client from "./pages/client/Client";
import Facture_client from "./pages/client/Facture_client";
import HomePage from "./pages/home/HomePage";
import Material from "./pages/material/Material";
import Service from "./pages/service/Service";
import Invoice from "./pages/invoice/Invoice"
import UpdateUser from "./pages/company/UpdateCompany";
import Homeadmin from "./pages/admin/Homeadmin";
const Routes = () => {
    return (

        <Switch>

            <Route exact path="/">
                <HomePage />
            </Route>

            <Route exact path="/client" >
                <Client />
            </Route>

            <Route exact path="/client/facture" >
                <Facture_client />
            </Route>

            <Route exact path="/service" >
                <Service />
            </Route>

            <Route exact path="/materiel" >
                <Material />
            </Route>

            <Route exact path="/facture">
                <Invoice />
            </Route>

            <Route exact path="/company/parametre">
                <UpdateUser />
            </Route>

            {/*  <Route exact path="/customers">
                <h1>Customers Page</h1>
            </Route>
            <Route exact path="/diagrams">
                <h1>Diagrams Page</h1>
            </Route> */}
            <Route exact path="/admin">
                <Homeadmin />
            </Route>

            <Redirect to="/" />
        </Switch >
    );
};

export default Routes;
