import React, { useState } from 'react'
import{ faker} from '@faker-js/faker'
import SingleProduct from './SingleProduct'
import './styles.css'

faker.seed(100)
const Home = () => {

  const productArray = [...Array(20)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.food() 
  }))

  const [products] = useState(productArray)
 
  return (
    <div className='productContainer'>
      {products.map((product) =>(
        <SingleProduct key ={product.id} product = {product}/>
      ))}
    </div>
  )
}

export default Home
