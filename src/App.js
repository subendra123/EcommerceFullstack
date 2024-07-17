
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from"./components/Header"
import Home from "./pages/Home"
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';



const myContext = createContext();

function App() {
  
  const[countrylist, setCountryList] = useState([]);
  const[selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async(url) => {
    const responsive = await axios.get(url).then((res) => {
      console.log(res.data.data);
      setCountryList(res.data.data)
    })

  }

  const values = {
    countrylist,
    setSelectedCountry,
    selectedCountry
  }

  return (
   <>
   <BrowserRouter>
   <myContext.Provider value={values}>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={ <Home /> } />
      </Routes>
      </myContext.Provider>
   </BrowserRouter>
  
   
   </>
  );
}

export default App;
export {myContext}