import Layout from '@/Components/layout';
import React, { useState } from 'react'
import axios from 'axios';

const NewProduct = () => {

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');

    async function createProduct(e){
        e.preventDefault();
        const data={title,description,price};
        await axios.post('/api/products',data);
    }


  return (
    <Layout>
        <form onSubmit={createProduct}>
            <h1 className='text-blue-900 mb-2 text-lg' >New Product </h1>
            <label>Product name</label>
            <input type='text' placeholder='product name' value={title} onChange={ev=>setTitle(ev.target.value)} ></input>
            <label>Description</label>
            <textarea placeholder='description' value={description} onChange={ev=>setDescription(ev.target.value)}></textarea>
            <label>Price (in USD)</label>
            <input ype='number' placeholder='price' value={price} onChange={ev=>setPrice(ev.target.value)}></input>
            <button className='btn-primary' type='submit'>Save</button>
        </form>
    </Layout>
  )
}

export default NewProduct;  