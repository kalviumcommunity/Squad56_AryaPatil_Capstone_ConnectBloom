import React, { useState } from 'react';
import './Cartpage.css';

function Cartpage() {
  const [quantity, setQuantity] = useState(1);  // State for quantity

  const handleAdd = () => {  // Increment quantity
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {  // Decrement quantity, ensuring it never goes below 1
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <> 
      <p className='paragraph'>
        Welcome to Cart!! 
        <div> 
          <div className='addtocart'> 
              <img id='imageofcart' src="https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=" alt="Plant" />  
              <p id='nameofplant'>Show plant</p>
              <div>
                <p id='quantity'>Quantity: {quantity}</p> {/* Display the current quantity */}
                <div className='cartbuttonsclass'> 
                  <button id='addbutton' className='buttonsforcart' onClick={handleAdd}>Add</button> {/* Add quantity button */}
                  <button id='removebutton' onClick={handleRemove}>Remove</button> {/* Remove quantity button */}
                </div>
              </div>
          </div>
        </div>
      </p>
    </>
  );
}

export default Cartpage;
