import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './Page.css'
import IndivdualSearch from './IndivdualSearch'
import axios from 'axios';
import IndivdualTable from './IndivdualTable'

class PersonalMessage extends Component{
  constructor(props){
    super(props);

    this.state = {
      name : '',
      message : '',
      history: [],
      show:false
    }
  }

  // how to get the value from the drop down list
  getName = (personName) =>{
    this.setState({
      name : personName
    });

  }

  getMessage = (evt) => {
    let mes = evt.target.value;
    this.setState({
      message : mes
    })
  }

  sendMessage = () => {
    let text = document.getElementsByClassName("Textarea").value;
    console.log(text)
    console.log("this is: ", this.state.name)
    fetch('http://c0e3d71a.ngrok.io/api/send_person', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Message':this.state.message,
          'Name': this.state.name
        })
        })
        alert("Send successfully!")

  }

   componentDidMount(){
     axios.get('http://c0e3d71a.ngrok.io/api/personal_history')
       .then(res => {
         console.log('this is res: ',res);
         this.setState({history: res.data});
       })
   }

    getHistory =() =>{
      this.setState(prevState => ({
        show : !prevState.show
      }))
    }

  render(){
    return(
      <div>
        <div className = "Top">
          <label htmlFor="Header">Select a person to send message</label>

          <IndivdualSearch className = "Dropdown" onChange = {this.getName}></IndivdualSearch>

        </div>
        <br/>
        <div className = "Container">
          <p className = "Message">Enter your message:</p>
          <div></div>
        </div>

        <TextareaAutosize value = {this.state.message} onChange = {this.getMessage}className = "Textarea"/>
        <br/>
        <div className = "ButtonArea">
          <button onClick = {this.getHistory} classID = "ManageButton">Manage History</button>
          <button onClick = {this.sendMessage}>Send</button>
      </div>
        <div>
          {this.state.show ?  <IndivdualTable className = "Table"data = {this.state.history}></IndivdualTable> : null}
        </div>
      </div>

    )
  }
}

export default PersonalMessage;
