import React from 'react';

const Card = (props) => {

    const { img, title, details, age, time } = props.data;


    return (
        <div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img className="w-full h-48 object-cover object-center" src={img} alt={title} />
                <div className="p-4">
                    <h2 className="text-gray-900 font-bold text-2xl mb-2">{title}</h2>
                    <p className="text-gray-700 text-base mb-4">Details: {details}</p>
                    <p className="text-gray-600 text-sm">Age: {age}</p>
                    <p className="text-gray-600 text-sm">Time: {time}</p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;