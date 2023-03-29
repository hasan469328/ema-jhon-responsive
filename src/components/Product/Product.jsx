import React from 'react';

const Product = (props) => {
  const {img,name,price,ratings,seller,shipping,id,quantity} = props.product
  
  const addToCart = props.addToCart

  return (
    <div className='border border-[#95A0A7] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] w-[300px] h-[508px] mt-7 rounded-lg relative'>

      <div className='pt-2 mx-auto w-72 h-72'>
        <img className='w-full rounded-lg' src={img} alt="" />
      </div>
      
      <div className='mt-2'>
        <h6 className='text-[#0E161A] px-2 text-[20px]'>{name}</h6>
        <p className='text-[#0E161A] px-2' >Price: ${price}</p>
        <br />
        <p className='text-[#2A414F] px-2'>Manufacturer: {seller}</p>
        <p className='text-[#2A414F] px-2'>Rating: {ratings} star</p>
      </div>

      <button onClick={() => addToCart(props.product)} className='bg-[#ff99004d] w-full px-0 absolute bottom-0 rounded-b-lg text-[#0E161A] p-2'>Add to Cart</button>

    </div>
  );
};

export default Product;