import React from 'react'
import ProductPage from '../ui/ProductPage'
import ProductsList from '../ui/ProductsList'
import { useProducts } from '../features/products/useProducts'

const Products = ({ onClose }) => {
  return (
    <ProductPage onClose={onClose}>
      <ProductsList useProducts={useProducts}></ProductsList>
    </ProductPage>
  )
}

export default Products
