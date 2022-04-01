import React from 'react';
import './Cart.css';


const Cart = ({ cart, handleRemoveFromCart }) => {

    let command;
    if (cart.length === 0) {
        command = <div><h5>Please add item at least one</h5></div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small>Thanks for adding item!!</small></p>
    }

    return (
        <div>
            <h2>Selected Items: {cart.length}</h2>

            {
                cart.map(tShirt => <p key={tShirt._id}>{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)

            }
            {cart.length === 0 || <p className='orange'> Sabbas! you win!!</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review</button>}
        </div>
    );
};

export default Cart;