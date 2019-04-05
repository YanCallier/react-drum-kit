import React, { Component } from 'react';
import './App.css';
import Drum from './components/Drum';
import Riddime from './components/Riddime/Riddime';

class App extends Component {

  constructor(){
    super();

    this.state = {
        uri:''
    }

    this.drumPlay = (played) => {

      this.setState({uri: played});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="drum-container">
          <Drum keysIn="AZE" className="Drum" theName="1" playing={this.drumPlay}/>
          <Drum keysIn="RT" className="Drum" theName="2" playing={this.drumPlay}/>
          <Drum keysIn="YUI" className="Drum" theName="3" playing={this.drumPlay}/>
        </div>
        <Riddime className="Riddime" uri={this.state.uri}/>
      </div>
    );
  }
}

export default App;
