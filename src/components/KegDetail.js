import React from "react";
import PropTypes from 'prop-types';

function KegDetail(props){
  const {keg, onPourPint, onKegRefill, onKegDelete} = props;
  let KegStyles = {};
  let KegStatus = null;
  
  KegStyles = {
    margin: '10px',
    padding: '5px',
    fontFamily: 'sans-serif',
    border: '5px solid black',
    width: '80vw',
  }

  if (keg.pintsLeft <= 0){
    KegStatus =
    <div>
      <span style={{textAlign: 'right', color: '#B2BBB6'}}>    <em style={{textAlign: 'right', color: '#FF0000', backgroundColor: 'black'}}>Pints Left: EMPTY</em></span>
    </div>
  } else{
    KegStatus = 
    <div>
      <span style={{textAlign: 'right', color: '#B2BBB6'}}>    <em>Pints Left:{keg.pintsLeft}</em></span>
      <br />
      <button onClick={() => onPourPint(keg.id)}>Pour a glass</button>
    </div>
  }

  if (keg.brand === 'Champagne Barrels' ){
    KegStyles = {
      margin: '10px',
      padding: '5px',
      fontFamily: 'sans-serif',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#FFC8F9'
    }
  } else if (keg.brand === "Charlie's Cola Cart ©©©"){
    KegStyles = {
      margin: '10px',
      padding: '5px',
      fontFamily: 'sans-serif',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#C70039'
    }
  } else if (keg.brand === "Forest Jailbreak"){
    KegStyles = {
      margin: '10px',
      padding: '5px',
      fontFamily: 'sans-serif',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#8EB785'
    }
  } else if (keg.brand === "ALL GAS FULL OUT"){
    KegStyles = {
      margin: '10px',
      padding: '5px',
      fontFamily: 'sans-serif',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#900C3F'
    }
  } else{
    KegStyles = {
      margin: '10px',
      padding: '5px',
      fontFamily: 'sans-serif',
      border: '5px solid black',
      width: '80vw',
      backgroundColor: '#DAF7A6'
    }
  }

  return(
    <React.Fragment>
      <div style={KegStyles}>
        <h2>{keg.name}</h2>
        <h4>{keg.brand}<span style={{color: '#B2BBB6'}}>   ~~~   <em>{keg.alcoholContent}</em></span></h4>
        <hr />
        <p>{keg.description}</p>
        {KegStatus}
        <button onClick={() => onKegDelete(keg.id)}>Remove Keg</button>
        <button onClick={() => onKegRefill(keg.id)}>Pop a fresh Keg</button>
      </div> 
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onPourPint: PropTypes.func,
  onKegRefill: PropTypes.func,
  onKegDelete: PropTypes.func
}

export default KegDetail;