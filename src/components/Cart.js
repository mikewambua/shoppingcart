import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/Context'
import SingleProduct from './SingleProduct'

const Cart = () => {
  const {cart} = useContext(CartContext)
  const [total, setTotal] = useState()

  useEffect(()=>{
    setTotal(cart.reduce((accumulatedValue, currentValue)=>accumulatedValue + Number(currentValue.price), 0))
  }, [cart])

  return (
    <div>
      <span style={{fontSize:30}}>My Cart</span><br></br>
      <span style={{fontSize:30}}>Total: Kshs.{total}</span>
      <div className='productContainer'>
        {cart.map((product) =>(
          <SingleProduct product={product} key={product.id}/> 
        ))}
      </div>
    </div>
  )
}

export default Cart
