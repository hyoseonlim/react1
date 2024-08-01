import './App.css';
import React, { Component } from 'react';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

class App extends Component {

  state = {num:0}

  render(){
    return (
      <div className="App">
        <h1>Main</h1>
        {/* App 소유 state 변수인 num  + AddNumberSuper가 전달한 size */}
        
        <AddNumberSuper onClick={function(size){
          this.setState({num:this.state.num + size})
        }.bind(this)}></AddNumberSuper>
        num: <b>{this.state.num}</b>

        <ShowNumberSuper number={this.state.num}></ShowNumberSuper>
        
      </div>
    );
  }
}
export default App;
