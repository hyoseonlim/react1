import React, { Component } from "react";
import ShowNumber from "./ShowNumber";

export default class ShowNumberSuper extends Component{
    render(){
        return(
            <div id="super">
                <h1>Show Number Super</h1>
                number: <b>{this.props.number}</b>
                <ShowNumber number={this.props.number}></ShowNumber>
            </div>
        );
    }
}