import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const instanceAxios = axios.create({
    baseURL: "https://fakestoreapi.com/products?limit=20"
});

const App = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [productShow, setProductShow] = useState(10);

    const fetchProduct = async () => {
        try {
            const { data } = await instanceAxios.get();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleImageClick = (productId) => {
        setSelectedProductId(productId);
    };

    const showMoreProducts = () => {
        setProductShow(prevCount => prevCount + 10);
    };

    return (
        <div>
            <div className='btn'>
                <button onClick={fetchProduct} type='primary' id='btn'>SẢN PHẨM CỦA CỬA HÀNG CHÚNG TÔI</button>
            </div>
            <div className="product-container">
                {products.slice(0, productShow).map(product => (
                    <div key={product.id} className='product'>
                        <img src={product.image} alt={product.title} onClick={() => handleImageClick(product.id)} />
                        <div className='product-info'>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>{product.category}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProductId && <p>Selected Product ID: {selectedProductId}</p>}
            {productShow < products.length && (
                <button onClick={showMoreProducts}>Xem thêm</button>
            )}
        </div>
    );
}

export default App;