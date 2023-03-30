import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(res => setAllData(res))
    }, [])

    return (
        <div>
            <div className=" md:w-1/3 lg:w-1/3 p-4">
                {
                    allData.map(data => <Card
                        key={data.id}
                        data={data}
                    ></Card>)
                }
            </div>
            <h2>this is cards</h2>
        </div>
    );
};

export default Cards;