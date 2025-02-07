import React from 'react'
import { useChildrenParkProducts } from '../features/childrenParkProducts/useChildrenParkProducts'
import { useParams } from 'react-router-dom';

function ChildrenParkProduct() {
  const { itemName } = useParams(); 

  return (
    <div>
      <h1>Product: {itemName}</h1>
    </div>
  );
}

export default ChildrenParkProduct;