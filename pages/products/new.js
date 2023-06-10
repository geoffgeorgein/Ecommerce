import Layout from '@/Components/layout';
import React from 'react'

const NewProduct = () => {
  return (
    <Layout>
        <input type='text' placeholder='product name'></input>
        <textarea placeholder='description'></textarea>
    </Layout>
  )
}

export default NewProduct;  