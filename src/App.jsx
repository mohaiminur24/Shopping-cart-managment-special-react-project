import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import React, { useEffect, useState } from "react"
import { data } from "autoprefixer";

const usercontext = React.createContext();



function App() {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    fetch('product.json').then(res => res.json()).then(data=> setProducts(data.products))
  },[])
  return (
    <usercontext.Provider value={products}>
    <div className="App w-11/12 mx-auto">
        <Header/>
        <div className="min-h-[calc(100vh-150px)]">
          <Outlet/>
        </div>
        <Footer/>  
    </div>
    </usercontext.Provider>
    
  );
};

export default App
export{usercontext}
