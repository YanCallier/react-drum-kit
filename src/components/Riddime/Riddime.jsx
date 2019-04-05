import React, { Component } from 'react';
import './Riddime.css';
import qs from 'qs';

class Riddime extends Component {

    constructor(){
        super();

        this.trackIt = function  (e) {
            console.log("test");
        }

    }

    componentDidMount() {
    }

    render() {
        let query = qs.parse(window.location.search, { ignoreQueryPrefix: true });

        return (
          <div>
            {Object.keys(query).map((drum, index) => {
                return <h3 key={index}> <span className="red">{drum}</span> : <span className="green">{query[drum]}</span></h3>
            })}
          </div>
        );
    }

}

export default Riddime;