import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    // conditional rendering 
    let message;
    if (cart.length === 0) {
        message = <p>Buy at least one item</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jonno ekta nao</h3>
            <p>tomar jonno ekta </p>
            <p><small>amar jonno arekta nao, please</small></p>
        </div>
    }
    else {
        message = <p>Thanks for buying</p>
    }
    // conditional rendering finish 

    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h2>
            <p className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p> tin jonke gift deba?</p> : <p>kino</p>
            }
            <p>and operator</p>
            {
                cart.length === 2 && <h2>Double items</h2>
            }
            <p>or operator</p>
            {
                cart.length === 4 || <p> charta item na</p>
            }
        </div>
    );
};

export default Cart;