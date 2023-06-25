import Layout from '@/Components/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Categories = () => {

  const[name,setname]=useState('');
  const[categories,setcategories]=useState([]);
  const [parentCategory,setParentCategory]=useState('');

  useEffect(()=>{

    fetchCategories();
  },[]);

  function fetchCategories() {
    axios.get('/api/categories').then(result => {
      setcategories(result.data);
      console.log(categories);
    });
  }

  async function saveCategory(ev){

      ev.preventDefault();
      await axios.post('api/categories',{name});
      setname('');
  }
  return (
    <Layout>
        <h1>Categories</h1>
        
        <form onSubmit={saveCategory} className='flex gap-1'>
            <input type='text' onChange={ev=>setname(ev.target.value)} value={name} className='mb-0' ></input>
            <select className='mb-0' value={parentCategory} onChange={ev=>setParentCategory(ev.target.value)}>
              <option value='0' >No parent category</option>
              {
                categories.length>0 && categories.map(category=>(
                
                
                  <option>{category.name} </option>
               
               ))
              }
            </select>
            <button className='btn btn-primary'  > Save</button>
        
        </form>

        <table className='basic mt-4'>
          <thead>
            <tr>
              <td>Category name</td>
            </tr>
          </thead>
          <tbody>
            {categories.length>0 && categories.map(
              category=>(
                <tr>
                  <td>{category.name} </td>
                </tr>
              )
            )}
          </tbody>
        </table>
    </Layout>
  )
}

export default Categories;