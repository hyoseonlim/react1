import React from "react";

class Clock1 extends React.Component{
    /*
    constructor(props){
        super(props);
    }
    */

    render(){
        return(
            <div>
                <b>🌷 지금은 {new Date().toLocaleTimeString()}</b>
            </div>
        );
    }
}

export default Clock1;