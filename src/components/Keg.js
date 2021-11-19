import React from "react";
import PropTypes from 'prop-types';

function Keg(props){
  let KegStyles = {};

  KegStyles = {
    margin: '10px',
    padding: '5px',
    fontFamily: 'sans-serif',
    border: '5px solid black',
    width: '80vw',
  }
  return(
    <React.Fragment>
      <div style={KegStyles}>
        <h2>{props.name}</h2>
        <h4>{props.brand}<span style={{color: '#B2BBB6'}}>   ~~~   <em>{props.alcoholContent}</em></span></h4>
        <hr />
        <p>{props.description}<span style={{textAlign: 'right', color: '#B2BBB6'}}>    <em>Pints Left:{props.pintsLeft}</em></span></p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes ={
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.string,
  description: PropTypes.string,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  key: PropTypes.string
}

export default Keg;