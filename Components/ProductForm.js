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

    async function saveProduct(e){  
        e.preventDefault();
        const data={title,description,price};

        if(_id){
            await axios.put('/api/products',{...data,_id})
        }
        else{
            await axios.post('/api/products',data);
            
        }
        setgoToProducts(true);
    }

    if(goToProducts){
        router.push('/products');
        setgoToProducts(false);
    }



  return (
   
        <form onSubmit={saveProduct}>
            <h1 className='text-blue-900 mb-2 text-lg' >New Product </h1>
            <label>Product name</label>
            <input key={_id} type='text' placeholder='product name' value={title}  onChange={ev=>setTitle(ev.target.value)} ></input>

            <label>Photos</label>
            <div className='mb-2 ' >
                <button className=' w-24 h-24 border flex items-center justify-center'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>

                Upload
                </button>
                
            </div>
            <label>Description</label>
            <textarea placeholder='description' value={description} onChange={ev=>setDescription(ev.target.value)}></textarea>
            <label>Price (in USD)</label>
            <input ype='number' placeholder='price' value={price} onChange={ev=>setPrice(ev.target.value)}></input>
            <button className='btn-primary' type='submit'>Save</button>
        </form>
    
  )
}
export default ProductForm;
  

