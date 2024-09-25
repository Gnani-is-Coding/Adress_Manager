import React from 'react'
import './index.css'

function AddressForm() {

  return (
    <div className="address-container"> 
    <div className="form-container">
      <p className="title">Add New Address</p>
      <form className="form">
        <div className="input-group">
          <label for="name">Name</label>
          <input type="text" name="Name" id="name" placeholder="Name"/>
        </div>
        <div className="input-group">
          <label for="address">Address</label>
          <input type="text" name="address" id="address" placeholder="Address"/>
        </div>
        <button className="sign" type='submit'>Add</button>
      </form>
      
    </div>
        </div>
  )
}

export default AddressForm