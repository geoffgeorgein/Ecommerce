import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Layout from '@/Components/layout';

// const EditProductPage = () => {

 const ProductForm= ({
    _id,
    title:existingTitle,
    description:existingDescription,
    price:existingPrice,
})=> {

    // console.log("Title");
    // console.log(existingDescription);
    

    const [title,setTitle]=useState(existingTitle || ' ');
    const [description,setDescription]=useState(existingDescription || '');
    const [price,setPrice]=useState(existingPrice|| '');
    const[goToProducts,setgoToProducts]=useState(false);

    let n=existingPrice+Math.random(); 

    console.log("Title");
    console.log(description); 

   

    const router=useRouter();

    async function createProduct(e){
        e.preventDefault();
        const data={title,description,price};
        await axios.post('/api/products',data);
        setgoToProducts(true);
    }

    if(goToProducts){
        router.push('/products');
        setgoToProducts(false);
    }



  return (
   
        <form onSubmit={createProduct}>
            <h1 className='text-blue-900 mb-2 text-lg' >New Product </h1>
            <label>Product name</label>
            <input key={_id} type='text' placeholder='product name' value={title}  onChange={ev=>setTitle(ev.target.value)} ></input>
            <label>Description</label>
            <textarea placeholder='description' value={description} onChange={ev=>setDescription(ev.target.value)}></textarea>
            <label>Price (in USD)</label>
            <input ype='number' placeholder='price' value={price} onChange={ev=>setPrice(ev.target.value)}></input>
            <button className='btn-primary' type='submit'>Save</button>
        </form>
    
  )
}
export default ProductForm;
  

