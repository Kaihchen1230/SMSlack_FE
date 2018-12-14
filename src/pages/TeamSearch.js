import React, { Component } from 'react';
import './Page.css'
import axios from 'axios';
class TeamSearch extends Component{

  constructor(){
    super();
    this.state = {
      teams: []
    };
  }

  getTeam = (evt) => {
    let teamName = evt.target.value;
    this.props.onChange(teamName)
  }

  componentDidMount(){
    axios.get('http://c0e3d71a.ngrok.io/api/teams')
      .then(res => {
        console.log(res);
        this.setState({teams : res.data})
      })
  }

  render(){
    let teamList = this.state.teams;
    let teamOptions = teamList.map((team) =>
        <option key = {team.name}> {team.name}</option>
    )
    return(
      <div>
        <select onChange = {this.getTeam}>{teamOptions}</select>
      </div>
    )
  }
}

export default TeamSearch;
