import React from 'react';

const Cart = (props) => {
  const cart = props.cart
  
  let total = 0;
  let totalShipping = 0;
  let tax = 0;
  let grandTotal = 0;
  for(const product of cart){
    console.log(product.shipping);
    total = total + product.price;
    totalShipping = totalShipping + product.shipping
    tax = total * 7 / 100
    grandTotal = total + totalShipping + tax;
  }

  return (
    <div className='sticky top-0'>
      <h6 className='text-center text-2xl my-4'>Order Summary</h6>
      <p className='text-[#2A414F] pl-4 mb-4'>Selected Items: {cart.length}</p>
      <p className='text-[#2A414F] pl-4 mb-4'>Total Price: ${total}</p>
      <p className='text-[#2A414F] pl-4 mb-4'>Total Shipping Charge: ${totalShipping}</p>
      <p className='text-[#2A414F] pl-4 mb-4'>Tax: ${tax.toFixed(2)}</p>
      <h6 className='text-xl pl-4 mb-4'>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;