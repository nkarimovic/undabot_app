import './styles/styles.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import {Route, Switch, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/contact" exact component={Contact}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
