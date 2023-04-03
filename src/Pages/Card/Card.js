import React, { useContext, useState } from 'react';
import AccountInfo from '../AccountInfo/AccountInfo';
import { MyContext } from '../../App';



const Card = ({ handleAddToCart, data }) => {

    const { img, title, details, age, time } = data;
    const { handleBtnClick } = useContext(MyContext);



        return (
            <div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover object-center" src={img} alt={title} />
                    <div className="p-4">
                        <h2 className="text-gray-900 font-bold text-2xl mb-2">{title}</h2>
                        <p className="text-gray-700 text-base mb-4"> {details}</p>
                        <p className="text-gray-600 text-sm">Age: {age}</p>
                        <p className="text-gray-600 text-sm">Time: {time}s</p>
                        {/* onClick={() => handleAddToCart(data)} */}
                        <button onClick={() => handleBtnClick(data.time)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                            Add to list
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    export default Card;