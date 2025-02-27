import React from 'react'
import SingleDetails from '../components/Productdetailpage/SingleDetails'
import DetailContent from '../components/Productdetailpage/DetailContent'
import RelatedProducts from '../components/Productdetailpage/RelatedProducts'

const ProductDetails = () => {
  return (
    <div className=''>
         <SingleDetails />
        <DetailContent />
        <RelatedProducts /> 
    </div>
  )
}

export default ProductDetails