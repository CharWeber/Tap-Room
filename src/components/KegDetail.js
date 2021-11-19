import React from "react";

function KegDetail(props){
  const {keg, onPourPint} = props;
  let KegStyles = {};
  let VisibleState = null;

  KegStyles = {
    margin: '10px',
    padding: '5px',
    fontFamily: 'sans-serif',
    border: '5px solid black',
    width: '80vw',
  }

  if (keg.pintsLeft <= 0){
    VisibleState = 
    <div style={KegStyles}>
    <h2>{keg.name}</h2>
    <h4>{keg.brand}<span style={{color: '#B2BBB6'}}>   ~~~   <em>{keg.alcoholContent}</em></span></h4>
    <hr />
    <p>{keg.description}<span style={{textAlign: 'right', color: '#B2BBB6'}}>    <em style={{color: 'red'}}>Pints Left: EMPTY</em></span></p>
</div>
  } else{
    VisibleState = 
    <div style={KegStyles}>
    <h2>{keg.name}</h2>
    <h4>{keg.brand}<span style={{color: '#B2BBB6'}}>   ~~~   <em>{keg.alcoholContent}</em></span></h4>
    <hr />
    <p>{keg.description}<span style={{textAlign: 'right', color: '#B2BBB6'}}>    <em>Pints Left:{keg.pintsLeft}</em></span></p>
    <br />
    <button onClick={() => onPourPint(keg.id)}>Pour a glass</button>
</div>
  }
  return(
    <React.Fragment>
      {VisibleState}
    </React.Fragment>
  );
}

export default KegDetail;