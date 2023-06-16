import Layout from '@/Components/layout'
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const DeleteProductPage = () => {

  const router = useRouter();
  const [productInfo,setProductInfo] = useState();
  const {id} = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/products?id='+id).then(response => {
      setProductInfo(response.data);
    });
  }, [id]);

  function goback(){
    router.push('/products');
  }

  async function deleteProduct(){
    await axios.delete('/api/products?id='+id);
    goback();
  }

  return (
    <Layout>

      <h1>Do u want to delete</h1>

      <div className='flex gap-2 justify-center'>
        <button className='btn-red' onClick={deleteProduct}>YES</button>
        <button className='btn-default' onClick={goback}>NO</button>
      </div>
    </Layout>
  )
}

export default DeleteProductPage