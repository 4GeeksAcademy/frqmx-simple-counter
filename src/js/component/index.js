import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "bootstrap";

import "./icons.js"

import "./index.scss"
import PropTypes from "prop-types";

function SimpleCounter(props) {
    return (<div className="bigCounter">
            <div className="calendar"></div>
            <i className="far fa-clock"></i>
        <div clasaName="four">{props.digitFour}</div>
        <div clasaName="three">{props.digitThree}</div>
        <div clasaName="two">{props.digitTwo}</div>
        <div clasaName="one">{props.digitOne}</div>
    </div>);     
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};


let counter = 0;
setInterval(function(){
    const four= Math.floor(counter/10000);  
    const three= Math.floor(counter/1000);  
    const two= Math.floor(counter/10);  
    const one= Math.floor(counter/1);  
    console.log(four, three, two, one);

    counter++;
    
    ReactDOM.render(
    <SimpleCounter digit0ne={one} digitTwo={two} digiThree={three} digitFour={four} />, document.querySelector('#app'));    
}, 1000); 




