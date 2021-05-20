
import React from "react";
import UsersContainer from "./Commponents/UsersContainer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Info from "./Commponents/Info";
import Header from "./Commponents/Header";

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state={}
  }
  render(){
    return (
      <Router>
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path="/" component={UsersContainer}/>
            <Route path="/info" component={Info}/>
          </Switch>
          
        </div>
      </Router>
      
    );
  }
 
}

export default App;
