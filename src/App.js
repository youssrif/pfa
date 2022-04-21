import React, { useState,useEffect } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Auth/Login";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import Routes from "./Routes";
import { Redirect } from "react-router-dom";
import Register from "./pages/Auth/Register"
import { useSelector } from "react-redux";
export const ThemeContext = React.createContext(null);

const App = () => {
    const user=useSelector(state=>state?.LoginUser?.data?.accessToken)
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;
    const [isLogged, setIslogged] = useState(false)
    console.log('suer sdqsd',user)
    useEffect(()=>{
     if(!!user)
     {
         setIslogged(true)
     }
    },[user])
    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Sidebar - Code Focus</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                {isLogged === false ?
                    (
                        <>
                            <Switch>
                                <Route exact path="/login">
                                    <Login logged={setIslogged} />
                                </Route>
                                <Route exact path="/register">
                                    <Register />
                                </Route>
                                <Redirect to="/login" />
                            </Switch>
                        </>
                    ) : (<>
                        <Layout>
                            <Routes />
                        </Layout>
                    </>)}
            </ThemeProvider>
        </ThemeContext.Provider>

    );
};
export default App;
