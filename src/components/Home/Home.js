import React, { useState } from 'react';
import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import TShirt from '../TShirt/TShirt'



const Home = () => {
    const [tShirts, setTShirts] = useTshirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else {
            alert('Item already added')
        }

    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest)
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;