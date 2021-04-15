import React from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
const App = () => {
  
  return (
    <div className="conteiner">
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/app"} />} />
        
      </Switch>
    </div>
  );
};

export default App;
