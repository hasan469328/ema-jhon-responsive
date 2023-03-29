import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
  // set shop products in products state variable
  const [products, setProducts] = useState([])
  // set state for cart
  const [cart, setCart] = useState([])

  // event handler function of add to cart 
  const addToCart = (product) => {
    console.log('clicked', product)
    const newCart = [...cart, product]
    setCart(newCart)
  }



  // Load shop products from product.json file
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div className='grid grid-cols-1 lg:grid-cols-5'>

      <div className='lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 gap-2 '>

        {/* all products */}

        {
          products.map(product => <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          >

          </Product>)
        }
      </div>

        {/* Cart */}
      <div className='bg-[#ff99004d]'>
        <h6 className='text-center'>Order Summary</h6>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;