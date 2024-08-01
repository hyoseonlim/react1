import React, { Component } from "react";
export default class ShowNumber extends Component{
    render(){
        return(
            <div id="d">
                <h1>Show Number</h1>
                <input type="text" value={this.props.number} readOnly></input>
            </div>
        );
    }
}