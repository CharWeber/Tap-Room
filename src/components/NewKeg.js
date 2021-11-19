import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

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
      <form onSubmit={handleNewKegForm}>
        <input
          type='text'
          name='name'
          placeholder='Drink Name' />
          <br/>
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
          <br/>
        <input
          type='textarea'
          name='description'
          placeholder='Description' />
          <br/>
        <input
          type='number'
          name='price'
          placeholder='Price' />
          <br/>
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
          <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}


NewKeg.propTypes ={
  onNewKeg: PropTypes.func,
  buttonText: PropTypes.string
}
export default NewKeg;