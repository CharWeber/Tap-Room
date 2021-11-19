import React from "react";
import PropTypes from 'prop-types';
import Keg from "./Keg";

function KegList(props){
  return(
    <React.Fragment>
      {props.mainKegList.map((keg, index) =>
      <Keg 
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        description={keg.description}
        pintsLeft={keg.pintsLeft}
        id={keg.id}
        key={index}
      />
      )}
    </React.Fragment>
  );
}

KegList.propTypes ={
  mainKegList: PropTypes.array,
}
export default KegList;