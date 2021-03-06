import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewKeg(props){

  function handleNewKegForm(e){
    e.preventDefault();
    props.onNewKeg({
      name: e.target.name.value,
      brand: e.target.brand.value,
      description: e.target.description.value,
      price: e.target.price.value,
      alcoholContent: e.target.alcoholContent.value,
      pintsLeft: 124,
      id: v4()
    })
  }
  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewKegForm} buttonText="Submit New Keg" />
    </React.Fragment>
  );
}


NewKeg.propTypes ={
  onNewKeg: PropTypes.func,
  buttonText: PropTypes.string
}
export default NewKeg;