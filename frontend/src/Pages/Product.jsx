import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { Relatedproducts } from '../components/RelatedProducts/Relatedproducts';

export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productid} = useParams();
  const products=all_product.find((e)=> e.id === Number(productid));

  return (
    <div>
      <Breadcrums products={products} ></Breadcrums>
      <ProductDisplay products={products} ></ProductDisplay>
      <Relatedproducts></Relatedproducts>
    </div>
  )
}
