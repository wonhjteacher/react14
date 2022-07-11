import React from 'react';
import "./ProductItem.css";
const ProductItem = () => {
    return (
        <div className="product-item">
        <img
            className="item-image" 
            alt="product"
            src={} 
         />
        <div className="item-name" >{}</div>
        <div className="item-price">{}원</div>
    </div>
    );
};

export default ProductItem;