import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunt = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <div>
            <h4>Aunt</h4>
            <p>House: {house}</p>
            <button onClick={handleHouseIncrease}>Aunty Magic</button>
        </div>
    );
};

export default Aunt;