import React, { Component } from 'react';
import axios from 'axios';

class IndivdualSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      indivduals: []
    };
  }

  getName = (evt) => {
    let name = evt.target.value;
    this.props.onChange(name)
  }

  componentDidMount() {
    axios.get('http://c0e3d71a.ngrok.io/api/names')
    .then (res => {
      this.setState({indivduals : res.data})
    })
  }

  render(){
    let indivduals = this.state.indivduals;
    let indivdualOption = indivduals.map((indivdual) =>
      <option key ={indivdual.name}>{indivdual.name}</option>
    );
    return(
      <div>
          <select onChange = {this.getName}>{indivdualOption}</select>
      </div>
    )

  }
}
export default IndivdualSearch;
