import ProductForm from '@/Components/ProductForm';
import Layout from '@/Components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const EditProductPage = () => {

    const [productInfo, setProductInfo] = useState(null);

    const router=useRouter();
    
    const {id}=router.query;
    console.log(id);

    useEffect(()=>{

      if (!id) {
        return;
      } 

      axios.get('/api/products?id='+id).then(response=>{
       
        setProductInfo(response.data);
      })
    },[id]);
    console.log("Info");
    console.log(productInfo);
    
  return (
    <Layout>
      {
        productInfo && <ProductForm {...productInfo}/>
      }
        
    </Layout>
  )
}

export default EditProductPage;