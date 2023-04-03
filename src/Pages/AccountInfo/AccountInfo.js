import React from 'react';
import profileImg from "../../Photos/profile.jpg";

const AccountInfo = (props) => {
    const myDatas = props.cartData;
    // console.log(myData);
    myDatas.map((myData) => console.log(myData))

    return (
        <div className='bg-white mx-auto'>
            <div className='p-4'>
                <div className='flex gap-2 container my-5 mx-auto '>
                    <img className='rounded-full w-16' src={profileImg} alt="" />
                    <div>
                        <h4 className='text-xl font-bold'>Md Faysal</h4>
                        <p>Noakhali, Bangladesh</p>
                    </div>
                </div>
                <div className='flex justify-around my-2 p-2 text-gray-700 bg-gray-200 rounded-lg'>
                    <div>
                        <h4 className='text-1xl font-bold'>60kg</h4>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h4 className='text-1xl font-bold'>5.8</h4>
                        <p>Height</p>
                    </div>
                    <div>
                        <h4 className='text-1xl font-bold'>19yrs</h4>
                        <p>Age</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-1xl font-bold p-2 text-gray-700'>Add a Break</h2>
                    <div className='bg-gray-200 rounded-lg flex gap-4 p-3'>
                        <p className='bg-white rounded-full p-2'>10s</p>
                        <p className='bg-white rounded-full p-2'>20s</p>
                        <p className='bg-white rounded-full p-2'>30s</p>
                        <p className='bg-white rounded-full p-2'>40s</p>
                        <p className='bg-white rounded-full p-2'>50s</p>
                    </div>
                </div>
                <br />
                <div>
                    <h2 className='text-1xl font-bold rounded-lg p-2 text-gray-700'>Exercise Details</h2>
                    <div className="flex items-center p-2 mb-4 rounded-lg bg-gray-200">
                        <label className="font-bold text-gray-700" >Exercise Time:</label>

                        <input  className="py-2 px-3 w-24 bg-gray-200 w-75" type="text" value={props.cartData} readOnly />
                    </div>
                    <div className="flex items-center p-2 rounded-lg mb-4 bg-gray-200">
                        <label className="font-bold text-gray-700" >Break Time:</label>
                        <input className="py-2 px-3 w-24 bg-gray-200" type="text" />
                    </div>
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                    Completed
                </button>
            </div>

        </div>
    );
};

export default AccountInfo;