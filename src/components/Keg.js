import React from "react";
import PropTypes from 'prop-types';

function Keg(props){
  let KegStyles = {};
  let KegStatus = null;

  KegStyles = {
    
    padding: '5px',
    fontFamily: 'sans-serif',
    border: '5px solid black',
    width: '80vw',
  }
  if (props.brand === 'Champagne Barrels' ){
    KegStyles = {
      margin: 'auto',
      padding: '5px',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#430071',
      opacity: '.9'
    }
  } else if (props.brand === "Charlie's Cola Cart ©©©"){
    KegStyles = {
      margin: 'auto',
      padding: '5px',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#C70039',
      opacity: '.9'
    }
  } else if (props.brand === "Forest Jailbreak"){
    KegStyles = {
      margin: 'auto',
      padding: '5px',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#0B5A00',
      opacity: '.9'
    }
  } else if (props.brand === "ALL GAS FULL OUT"){
    KegStyles = {
      margin: 'auto',
      padding: '5px',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#900C3F',
      opacity: '.9'
    }
  } else{
    KegStyles = {
      margin: 'auto',
      padding: '5px',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#DAF7A6',
      opacity: '.9'
    }
  }

  if (props.pintsLeft <= 0){
    KegStatus =  
    <div>
      <p>{props.description}</p><span style={{textAlign: 'right', color: '#FF0000', backgroundColor: 'black'}}>
      <em>Pints Left: EMPTY</em></span>
    </div>
  }else if (props.pintsLeft <=10){
    KegStatus =  
    <div>
      <p>{props.description}</p><span style={{textAlign: 'right', color: '#FF0000', backgroundColor: 'yellow'}}>
      <em>Pints Left: {props.pintsLeft} Almost out!</em></span>
    </div>
  } else {
    KegStatus =  
    <div>
      <p>{props.description}</p><span style={{textAlign: 'right', color: '#B2BBB6'}}>
      <em>Pints Left:{props.pintsLeft}</em></span>
    </div>
  }

  return(
    <React.Fragment>
      <div class="content-card keg" onClick={() => props.onKegClicked(props.id)} style={KegStyles}>
        <h2>{props.name}</h2>
        <h4>{props.brand}<span style={{color: '#B2BBB6'}}>   ~~~   <em>{props.alcoholContent}</em></span></h4>
        <hr />
        {KegStatus}
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
  key: PropTypes.string,
  onKegClicked: PropTypes.func
}

export default Keg;