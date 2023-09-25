import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData()
    return (
        <div>
            <h1>{phone.phoneName}</h1>
            <h2>{phone.ram}</h2>
        </div>
    );
};

export default Phone;