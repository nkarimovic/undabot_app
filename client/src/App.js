import './styles/styles.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Header from "./components/Header";
import {Route, Switch, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
