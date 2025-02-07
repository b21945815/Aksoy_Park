import React from 'react'
import ProductPage from '../ui/ProductPage'
import ProductsList from '../ui/ProductsList'
import { useChildrenParkProducts } from '../features/childrenParkProducts/useChildrenParkProducts'

const ChildrenParkProducts = ({ onClose, onMobileClose }) => {
  return (
    <ProductPage onClose={onClose}>
      <ProductsList mainCategory="childrenParkProduct" useProducts={useChildrenParkProducts} closeThisPage={onClose} onMobileClose={onMobileClose}></ProductsList>
    </ProductPage>
  )
}

export default ChildrenParkProducts
