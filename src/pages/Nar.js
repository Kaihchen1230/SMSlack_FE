
import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Page.css'

class Nar extends Component{

  clickedEvent(){
    console.log("it is click")
  }
    render(){
      return(
        <div className = 'Navbar'>
          <Navbar >
            <Navbar.Header>
              <Navbar.Brand className = "Brand">
                <a href="/">SM Slack</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem className = "Event" ventKey={1} href="/events">
                Events
              </NavItem>
              <NavItem eventKey={2} href="/announcement">
                Announcement
              </NavItem>
              <NavItem eventKey={3} href="/group-message">
                Group Message
              </NavItem>
              <NavItem eventKey={4} href="/personal-message">
                Personal Message
              </NavItem>
            </Nav>
            </Navbar>
      </div>
      );
    }
}
export default Nar;
