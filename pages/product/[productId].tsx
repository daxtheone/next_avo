import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const { query : { productId } } = useRouter()
  const [ product, setProduct] = useState<TProduct>()
  useEffect( () => {
    if(productId){
      window.fetch(`/api/avo/${productId}`)
      .then((response)=> response.json())
      .then((data)=>{
        setProduct(data)
      })
    }
    
  } , [productId])
  return (
    <div>
      Esta es la página del producto : { product?.sku }
    </div>
  )
}

export default ProductItem
