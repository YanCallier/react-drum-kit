import React, { Component } from 'react';
import './Drum.css';
import Key from './components/Key';
import qs from 'qs';

class Drum extends Component {

    constructor(){
        super();

        this.state = {
            keysOut:[],
            keyPressed:"",
        }
        
        this.keys = [
            {code:65, letter:'A', sound:'clap'},
            {code:90, letter:'Z', sound:'tink'},
            {code:69, letter:'E', sound:'kick'},
            {code:82, letter:'R', sound:'openhat'},
            {code:84, letter:'T', sound:'boom'},
            {code:89, letter:'Y', sound:'ride'},
            {code:85, letter:'U', sound:'snare'},
            {code:73, letter:'I', sound:'tom'},
          ]

        this.pressing = (key) => {
          
          let newPressed = this.state.keyPressed + key;
          this.setState({keyPressed: newPressed});
          this.majUrl();
        }

        this.majUrl = () => {

          let query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
          query[this.props.theName] = this.state.keyPressed;

          query = qs.stringify(query);

          if (window.history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?'+query;
             window.history.pushState({path:newurl},'',newurl);
          }

          this.props.playing(query);
        }
    }

    componentDidMount() {

      let splitIn = this.props.keysIn.split('');
      let out = [];
      for (var i=0; splitIn[i];i++){

        for (var j=0; this.keys[j];j++){

          if (splitIn[i] === this.keys[j].letter){  
            out[i] = this.keys[j];
          }
        }
      }

      let pressed = qs.parse(window.location.search, { ignoreQueryPrefix: true });
      let pressedDrum = pressed[this.props.theName]
      if (!pressedDrum) pressedDrum = '';
      
      this.setState({
        keysOut : out,
        keyPressed : pressedDrum
      });
    }

  render() {
    return (
      <div>
        <h3 className="red">{this.props.theName}</h3>
        {this.state.keysOut.map((item, index) =>
          <Key key={index} letter={item.letter} code={item.code} sound={item.sound} pressing={this.pressing}/>
          )}
        
      </div>
    );
  }
}

export default Drum;
