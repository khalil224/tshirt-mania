import React from 'react';
import MySelf from '../Aunt/MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
    return (
        <div>
            <h4>Father</h4>
            <p>House: {house}</p>
            <div style={{ display: 'flex' }}>
                <MySelf house={house} ></MySelf>
                <Brother house={house} ></Brother>
                <Sister house={house} ></Sister>
            </div>

        </div>
    );
};

export default Father;