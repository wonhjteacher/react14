import React from 'react';
import "./ProductItem.css";
const ProductItem = ({item}) => {
    return (
        <div className="product-item">
        <img
            className="item-image" 
            alt="product"
            src={item.product_img} 
         />
        <div className="item-name" >{item.product_name}</div>
        <div className="item-price">{item.price}원</div>
    </div>
    );
};

export default ProductItem;