import React from 'react'
import { getImageUrl } from '../../utils/getImageUrl'

const ProductCard = ({product}) => {
  return (
    <div>
        <div className='bg-[#FAFAFA]'>
            <img src={getImageUrl(`${product.imageUrl}`)} alt=''/>
        </div>
        <div className='bg-white p-6 dark:bg-black shadow-sm'>
           <h4 className='text-base mb-1'>{product.category} </h4>
           <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
        </div>
    </div>
  )
}

export default ProductCard