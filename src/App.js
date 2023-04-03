import logo from './logo.svg';
import './App.css';
import AccountInfo from '../src/Pages/AccountInfo/AccountInfo';
import Cards from './Pages/Cards/Cards';
import React, { useEffect, useState } from 'react';


export const MyContext = React.createContext();


function App() {

  const [cartDatas, setCartData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  const handleBtnClick = (data) => {
    console.log(data)
    setCartData((prevCartData) => [...prevCartData, data]);
  };

  useEffect(() => {
    console.log(cartDatas)
    setSelectedData(cartDatas)
  }, [cartDatas])

  return (
    <MyContext.Provider value={{ cartDatas, handleBtnClick }}>
      <div className="bg-gray-200 p-5 gap-4 home mx-auto">
        <Cards className="grow"></Cards>
        <AccountInfo cartData={selectedData} className="flex-none w-10"></AccountInfo>
      </div>
    </MyContext.Provider>

  );

}

export default App;
