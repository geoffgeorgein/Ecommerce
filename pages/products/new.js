import Layout from '@/Components/layout';
import React from 'react'

const NewProduct = () => {
  return (
    <Layout>
        <h1 className='text-blue-900 mb-2 text-lg' >New Product </h1>
        <label>Product name</label>
        <input type='text' placeholder='product name'></input>
        <label>Description</label>
        <textarea placeholder='description'></textarea>
        <label>Price (in USD)</label>
        <input ype='text' placeholder='price'></input>
    </Layout>
  )
}

export default NewProduct;  