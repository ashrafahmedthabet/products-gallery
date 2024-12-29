import { NextPage } from 'next'
import React from 'react'
import ProductDetails from '@/components/details/ProductDetails';


const Details: NextPage<{ params: { id: string } }> = async ({ params }) => {
    const productId = (await params).id;

  return (
    <ProductDetails productId={productId}/>
    )
}

export default Details;