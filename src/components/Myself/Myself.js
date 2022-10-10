import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house }) => {
    return (
        <div>
            <h2>Myself</h2>
            <p>House: {house}</p>
            <section>
                <Special house={house}></Special>
            </section>
        </div>
    );
};

export default Myself;