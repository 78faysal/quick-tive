import React, { useEffect, useState } from 'react';
import profileImg from "../../Photos/profile.jpg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountInfo = (props) => {

    // exercise time 
    const myDatas = props.cartData;

    let sum = 0;

    for (let i = 0; i < myDatas.length; i++) {
        sum += myDatas[i];
        // console.log(sum);
    }


    // add break code 
    const [pValue, setPValue] = useState('');
    const [text, setText] = useState("");

    useEffect(() => {
        const localStorageText = localStorage.getItem("pValue");
        if (localStorageText) {
            setText(localStorageText);
        }
    }, []);

    const handleClick = (event) => {
        setPValue(event.target.innerText);
        localStorage.setItem('pValue', event.target.innerText);
    }


    // react toast 
    const handleBtnClick = () => {
        toast('Congrats! You did it 💪');
    };

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
                    <h2 className='text-1xl font-bold p-2 text-gray-700'>Add a Break (s)</h2>
                    <div className='bg-gray-200 rounded-lg flex gap-4 p-3'>
                        <p onClick={handleClick} className='bg-white rounded-full p-2 hover:bg-blue-500'>10s</p>
                        <p onClick={handleClick} className='bg-white rounded-full p-2 hover:bg-blue-500'>20s</p>
                        <p onClick={handleClick} className='bg-white rounded-full p-2 hover:bg-blue-500'>30s</p>
                        <p onClick={handleClick} className='bg-white rounded-full p-2 hover:bg-blue-500'>40s</p>
                        <p onClick={handleClick} className='bg-white rounded-full p-2 hover:bg-blue-500'>50s</p>
                    </div>
                </div>
                <br />
                <div>
                    <h2 className='text-1xl font-bold rounded-lg p-2 text-gray-700'>Exercise Details</h2>
                    <div className="flex items-center p-2 mb-4 rounded-lg bg-gray-200">
                        <label className="font-bold text-gray-700" >Exercise Time:</label>

                        <input className="py-2 px-3 w-24 bg-gray-200 w-75" type="text" value={`${sum}s`} readOnly />
                    </div>
                    <div className="flex items-center p-2 rounded-lg mb-4 bg-gray-200">
                        <label className="font-bold text-gray-700" >Break Time:</label>
                        <input className="py-2 px-3 w-24 bg-gray-200" type="text" value={`${text}`} />
                    </div>
                </div>
                <button onClick={handleBtnClick} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                    Activity Completed
                </button>
                <ToastContainer />
            </div>

        </div>
    );
};

export default AccountInfo;