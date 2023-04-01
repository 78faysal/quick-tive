import logo from './logo.svg';
import './App.css';
import AccountInfo from '../src/Pages/AccountInfo/AccountInfo';
import Cards from './Pages/Cards/Cards';
import React, { useEffect, useState } from 'react';



export const MyContext = React.createContext();


function App() {

  // const [items, setItems] = useState([]);

  // const handleAddToCart = (cardDetails) => {
  //   const newItem = { ...cardDetails };
  //   setItems((prevItems) => [...prevItems, newItem]);
  // }

  // console.log(items);


  
  const [cartDatas, setCartData] = useState([]);

  const handleBtnClick = (data) => {
    console.log(cartDatas)
    setCartData([...cartDatas, data]);
  };

  useEffect(() => {
    console.log(cartDatas);
  },[cartDatas])

  return (
    <MyContext.Provider value={{ cartDatas, handleBtnClick }}>
      <div className="bg-gray-200 p-5 gap-4 home mx-auto">
        <Cards className="grow"></Cards>
        <AccountInfo cartData={cartDatas} className="flex-none w-10"></AccountInfo>
      </div>
    </MyContext.Provider>

  );

}

export default App;
