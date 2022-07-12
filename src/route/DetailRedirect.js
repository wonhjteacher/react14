import React from 'react';
import ProductDetail from '../pages/ProductDetail';
import { Navigate } from 'react-router-dom';


const DetailRedirect = ({auth}) => {
    return auth ? <ProductDetail />: <Navigate to="/login" />;
};

export default DetailRedirect;