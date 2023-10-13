//import { useState } from 'react'
import './App.css'
import  Header from '../src/components/header/Header'
import Body from '../src/components/body/Body'
import { useState } from 'react';

function App() {
 const [currentCartTotal,setCurrentCartTotal] = useState(0);
 const [isAdded,setAddedToCart] = useState(false);

  return (
    <>
      <Header addedToCart={isAdded} totalCartItems={currentCartTotal} />
      <Body  addToCart = {(isAddedToCart:boolean)=>setAddedToCart(isAddedToCart)} setCartTotal = {(cartTotal:number) =>setCurrentCartTotal(cartTotal)} />
    </>
  )
}

export default App
