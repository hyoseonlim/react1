import React, { Component } from 'react';

class MyComponent2 extends Component {
    state = {
        name: ""
    };

    constructor(props) {
        super(props);
        console.log("Constructor Method 호출");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps 호출");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate 호출");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate 호출");
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate 호출");
    }

    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        console.log("render 호출");
        return (
            <div>
                <input onChange={this.handleOnChange} />
                <h1>My Name is {this.state.name}</h1>
            </div>
        );
    }
}

export default MyComponent2;
