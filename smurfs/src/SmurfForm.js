import { addingSmurfs } from './components/action';
 import { connect } from 'react-redux';
import React, { Component } from 'react';



class SmurfForm extends Component {


    state = {
            name: '',
            age: '', 
            height: '',	        
        }
    
        handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })	        
        }
        onSubmitHandle = e => {
            e.preventDefault(); e.preventDefault();
            this.props.addingSmurfs(this.state)	        
        }
    render() {
            return (	       
                <form onSubmit={this.onSubmitHandle}>
                    <input onChange={this.handleChange} name='name' value={this.state.name} />
                    <input onChange={this.handleChange} name='age' value={this.state.age} />
                    <input onChange={this.handleChange} name='height' value={this.state.height} />

                    <button>Submit</button>
                </form>	            
            );	       
        }
    }
    export default connect(null, {addingSmurfs})(SmurfForm);
