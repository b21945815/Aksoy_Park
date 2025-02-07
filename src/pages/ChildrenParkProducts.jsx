import React from 'react'
import ProductPage from '../ui/ProductPage'
import ProductsList from '../ui/ProductsList'
import { useChildrenParkProducts } from '../features/childrenParkProducts/useChildrenParkProducts'

const ChildrenParkProducts = ({ onClose }) => {
  return (
    <ProductPage onClose={onClose}>
      <ProductsList mainCategory="childrenParkProduct" useProducts={useChildrenParkProducts} closeThisPage={onClose}></ProductsList>
    </ProductPage>
  )
}

export default ChildrenParkProducts
