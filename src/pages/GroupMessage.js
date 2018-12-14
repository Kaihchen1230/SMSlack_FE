import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import TeamSearch from './TeamSearch'
import './Page.css'
import GroupTable from './GroupTable'
import axios from 'axios';

class GroupMessage extends Component{
  constructor(props){
    super(props);

    this.state = {
      teamName : '',
      message: '',
      history: [],
      show : false
    }
  }

  getTeamName = (newTeam) => {
    this.setState({
      teamName : newTeam
    })
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
    fetch('http://c0e3d71a.ngrok.io/api/send_group', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'Message':this.state.message,
    	  'Team Name':this.state.teamName
      })
    })
    alert("Send successfully!")
  }

  componentDidMount(){
    axios.get('http://c0e3d71a.ngrok.io/api/group_history')
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
        <label >Select a group to send message</label>
        <TeamSearch onChange = {this.getTeamName}></TeamSearch>
        </div>
        <div className = "Container">
        <p className = "Message">Enter your message:</p>
        <div></div>
        </div>
      <TextareaAutosize onChange = {this.getMessage}className = "Textarea"/>
        <br/>
        <div className = "ButtonArea">
          <button onClick = {this.getHistory}>Manage History</button>
          <button onClick = {this.sendMessage}>Send</button>
        </div>

        <div>
          {this.state.show ?  <GroupTable data = {this.state.history}/>: null}
        </div>
      </div>

    );
  }
}

export default GroupMessage;
