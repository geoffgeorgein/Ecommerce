import Layout from '@/Components/layout';
import React, { useState } from 'react'

const NewProduct = () => {

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');


  return (
    <Layout>
        <h1 className='text-blue-900 mb-2 text-lg' >New Product </h1>
        <label>Product name</label>
        <input type='text' placeholder='product name' value={title} onChange={ev=>setTitle(ev.target.value)} ></input>
        <label>Description</label>
        <textarea placeholder='description' value={description} onChange={ev=>setDescription(ev.target.value)}></textarea>
        <label>Price (in USD)</label>
        <input ype='number' placeholder='price' value={price} onChange={ev=>setPrice(ev.target.value)}></input>
        <button className='btn-primary'>Save</button>
    </Layout>
  )
}

export default NewProduct;  