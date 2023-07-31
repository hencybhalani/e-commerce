import React from 'react';
// import dummyImg from '../../assets/naruto.jpeg'
import './Product.scss'
import { useNavigate } from "react-router-dom";


function Product({product}) {
    const navigate = useNavigate();
    console.log('product', product);

    
  return (
    
    <div className="Product" onClick={() => navigate(`/products/${product?.attributes.key}`)}>
    <div className="product-container">
        <div className="product-img">
            <div className="img-container">
                {/* <img src={dummyImg} alt="" id="img"/> */}
                <img src={product?.attributes.image?.data.attributes.url} alt={product?.attributes.title} id="img"/>
            </div>
        </div>
        <div className="product-info">
            <p className="title">
                {/* Delux Wall Hanger 23", 23x23 Solid Color */}
                {product?.attributes.title}
            </p>
            <p className="price">₹ {product?.attributes.price}</p>
        </div>
    </div>
</div>
  )
}

export default Product