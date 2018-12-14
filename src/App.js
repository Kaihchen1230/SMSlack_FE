import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nar from './pages/Nar'
import Welcome from './pages/Welcome'
import Announcement from './pages/Announcement'
import Events from "./pages/Events"
import GroupMessage from "./pages/GroupMessage"
import PersonalMessage from "./pages/PersonalMessage"

class App extends Component {
  render() {
    return (
      <Router>
      <div className = "App">
        <Nar></Nar>
          <Route exact path = "/" component = {Welcome}></Route>
          <Route exact path="/announcement" component={Announcement} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/group-message" component={GroupMessage} />
          <Route exact path ="/personal-message" component = {PersonalMessage}/>
      </div>

      </Router>
    );
  }
}

export default App;
