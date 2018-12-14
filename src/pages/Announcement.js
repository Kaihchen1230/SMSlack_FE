import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './Page.css'
import AnnouncementTable from './AnnouncementTable'
import axios from 'axios';
class Announcement extends Component{

  constructor(props){
    super(props)

    this.state = {
        message : '',
        history :[],
        show : false
    }
  }


  sendMessage = () => {
      fetch('http://c0e3d71a.ngrok.io/api/send_announce', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Message': this.state.message
        })
    })
    alert("sent successfully")

  }
  onChange = (evt) => {
    let mes = evt.target.value;
    this.setState({
      message : mes
    })
  }


  componentDidMount(){
    axios.get('http://c0e3d71a.ngrok.io/api/announcement_history')
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
      <div className = "Page">
        <label htmlFor="Header"> Send Announcement: </label>
        <br/>
        <div className = 'left'>
          <TextareaAutosize onChange = {this.onChange}className = "Textarea" />
          <br/>
          <div className = "ButtonArea">
            <button onClick = {this.getHistory} classID = "ManageButton">Manage History</button>
            <button onClick = {this.sendMessage}>Send</button>
          </div>
        </div>
        <div>
          {this.state.show ?  <AnnouncementTable data = {this.state.history}></AnnouncementTable> : null}
        </div>

      </div>
    );
  }
}

export default Announcement;
