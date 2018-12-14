import React, { Component } from 'react';
import axios from 'axios';
import Table1 from "./Table"

class Events extends Component{
  state ={
    persons : []
  }



  componentDidMount(){
    axios.get('http://c0e3d71a.ngrok.io/api/participants')
      .then(res => {
        console.log(res);
        this.setState({persons: res.data});
      })
  }

  render(){

    return(
      <div className="Page">
      <h1 className="Table-header"> Participator Table</h1>
       <Table1 data = {this.state.persons}></Table1>
    </div>
    );
  }
}

export default Events;
