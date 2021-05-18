
import React from "react";
import UsersContainer from "./Commponents/UsersContainer";

class App extends React.Component{
  render(){
    return (
      <div className="container">
        <h1>List Users</h1>
          <UsersContainer/>
      </div>
    );
  }
 
}

export default App;
