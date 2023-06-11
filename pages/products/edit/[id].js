import ProductForm from '@/Components/ProductForm';
import Layout from '@/Components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const EditProductPage = () => {

    const [productInfo, setProductInfo] = useState(null);

    const router=useRouter();
    
    const {id}=router.query;

    useEffect(()=>{

      axios.get('/api/products?id='+id).then(response=>{
        console.log(response.data)
        setProductInfo(response.data);
      })
    },[id]);
    
  return (
    <Layout>
        <ProductForm {...productInfo}/>
    </Layout>
  )
}

export default EditProductPage;