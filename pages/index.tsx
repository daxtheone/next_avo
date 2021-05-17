import React, { useEffect, useState } from 'react'

const Home = () => {
  const [productList, setProductList] =  useState<TProduct[]>([])

  useEffect( () => {
    window.fetch('/api/avo')
    .then((response) => response.json())
    //.then( (json) => console.log(json) )
    .then( ({data, length}) => {
      setProductList(data)
      //console.log(data)
    } )
  }, [] )


  return (
    <div>
      <h1>Hola  q tal</h1>
      {productList.map(product => {
        return <div>{product.name}</div>
      } )}
    </div>
  )
}


export default Home
