import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    console.log(phones);
    return (
        <div>
            <h1>Phones : {phones.length}</h1>
            {
                phones.map(phone=> <Link key={phone.id} to={`/phone/${phone.id}`}><li>{phone.phoneName}</li></Link>)
            }
        </div>
    );
};

export default Phones;