import React, { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h4>GrandPa</h4>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunt house={house}></Aunt>
                </section>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;