import Layout from '@/Components/layout';
import Link from 'next/link';
import React from 'react'

const Products = () => {
  return (
    <Layout>
        
        <Link className="text-white bg-blue-900 rounded-md px-1 py-1 m-3" href={'/products'}> Products here </Link>
    </Layout>
  )
}

export default Products;