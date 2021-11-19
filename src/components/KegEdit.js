import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function KegEdit(props){
  const { keg } = props;
  function handleEditFormSubmission(e){
    e.preventDefault();
    props.onKegEdit({
      name: e.target.name.value,
      brand: e.target.brand.value,
      description: e.target.description.value,
      price: e.target.price.value,
      alcoholContent: e.target.alcoholContent.value,
      pintsLeft: keg.pintsLeft,
      id: keg.id
    })
  }
  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditFormSubmission} buttonText="Edit Keg"/>
    </React.Fragment>
  );
}

KegEdit.propTypes = {
  keg: PropTypes.object,
  onKegEdit: PropTypes.func
}

export default KegEdit;