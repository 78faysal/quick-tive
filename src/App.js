import logo from './logo.svg';
import './App.css';
import AccountInfo from '../src/Pages/AccountInfo/AccountInfo';
import Cards from './Pages/Cards/Cards';

function App() {
  return (
    <div className="bg-gray-200 p-5  gap-4 home mx-auto">
      <Cards className="grow"></Cards>
      <AccountInfo className="flex-none w-10"></AccountInfo>
    </div>
  );
}

export default App;
