import React, { useEffect, useState } from 'react';
import AccountInfo from '../AccountInfo/AccountInfo';
import Card from '../Card/Card';
import img from '../../Photos/logo1.png'

const Cards = (props) => {
    const { handleAddToCart } = props;
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(res => setAllData(res))
    }, [])


    return (
        <div className='p-10'>
            <div>
                <img className='w-28' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-2xl py-4'>Select todays exercise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 container mx-auto">
                    {
                        allData.map(data => <Card
                            key={data.id}
                            data={data}
                            handleAddToCart={handleAddToCart}
                        ></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;