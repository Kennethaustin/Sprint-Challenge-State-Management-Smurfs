import React, { Component } from "react";
import "./App.css";
import SmurfForm from "../SmurfForm";
import { connect } from 'react-redux';
import { fetchSmurfs } from './action';


class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {

    return (
      <>
        <h1>SMURFS! 2.0 W/ Redux</h1>
      {this.props.smurfs.map(smurf => (
        <p>
          {smurf.name}<br />
          {smurf.age}<br />
          {smurf.height}
          </p>
          ))}
          <SmurfForm/>
          </>
        );
      }
    }
const mapStateToProps = (state)=>{
  return {
          smurfs: state.smurfs,
        fetchSmurfs: state.fetchSmurfs
    
    
       }
    }
    
 export default connect(mapStateToProps, {fetchSmurfs})(App);
