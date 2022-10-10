import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    // const value = useContext(RingContext);
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p>Dadu dise: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;