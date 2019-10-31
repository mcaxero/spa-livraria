import React, { Component } from 'react';

class Input extends Component{

    render() {
        return (
            <div className="form-group">
              <label htmlFor={this.props.id}>{this.props.label}</label> 
              <input className="form-control" id={this.props.id} type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>                  
            </div>            
        );
    }
}

export default Input