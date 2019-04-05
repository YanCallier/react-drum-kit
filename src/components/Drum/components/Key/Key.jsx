import React, { Component } from 'react';
import './Key.css';

class Key extends Component {

  constructor(){
    super();

    this.state = {
      conditionalClass:"letter green"
    }

    this.onTransitionEnd = () => {
      this.setState({
        conditionalClass:"letter green",
      });
    }

  }

  componentDidMount() {
      window.addEventListener('keydown', (e) => {

            if (e.keyCode === this.props.code){

              this.setState({
                conditionalClass:"letter playing",
              });

              var audio = new Audio("sounds/"+ this.props.sound +".wav");
              audio.currentTime = 0;
              audio.play();

              this.props.pressing(this.props.letter);
            }            
        });
    }


  render() {
    return (
      <div className={this.state.conditionalClass} onTransitionEnd={this.onTransitionEnd}>
        {this.props.letter} 
      </div>
    );
  }
}

export default Key;
