import Layout from '@/Components/layout';
import axios from 'axios';
import React, { useState } from 'react'

const Categories = () => {

  const[name,setname]=useState('');

  async function saveCategory(ev){

      ev.preventDefault();
      await axios.post('api/categories',{name});
      setname('');
  }
  return (
    <Layout>
        <h1>Categories</h1>
        
        <form onSubmit={saveCategory}>
            <input type='text' onChange={ev=>setname(ev.target.value)} value={name}></input>
            <button className='btn btn-primary'  > Save</button>
        
        </form>
    </Layout>
  )
}

export default Categories;