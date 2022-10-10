import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {

        const exists = cart.find(ts => ts._id === tshirt._id);
        // যদি আমরা একটি প্রডাক্ট একবার এর বেশি কার্ট এ নিতে না চাই, ফাইন্ড করে দেখবো যে অলরেডি প্রডাক্ট টি আছে কিনা কার্ট এ, যদি থাকে তাহলে এলার্ট দিবে নইলে কার্ট এ অ্যাড করে নিবে 
        if (exists) {
            alert('Already addeded to cart');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }


    const handleRemoveFromCart = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;