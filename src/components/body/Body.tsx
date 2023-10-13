import './Body.css'
import Thumb from './Thumb'
import MainImage from './MainImage'
import AddToCart from './AddToCart'
import Counter from './Counter'
import Price from './Price'
import {useState} from 'react'

function Body(props: {  setCartTotal: (arg0: number) => void; addToCart: (arg0: boolean) => void })
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayTotal, setCurrentTotal] = useState(0);

    function addToCart(cartAdded:boolean)
    {
        props.addToCart(cartAdded)
        props.setCartTotal(displayTotal)
    }

    
    return ( <main>
        <div className='body-container'>
            <div className="even-columns">
                <div>
                    {/* Main Image */}
                    <MainImage callback={(newValue)=>setCurrentIndex(newValue)} currentIndex ={currentIndex} />
                    {/* Main Content */}
                    <Thumb  currentIndex={currentIndex} callback={(newValue)=>setCurrentIndex(newValue)}/>
                </div>
                <div className="additional-margin ">
                    <h1 className="padding-block-300 font-weight-bold font-size-300 text-primary-400">SNEAKER COMPANY</h1>
                    <h2 className="font-weight-bold text-neutral-black font-size-primary-heading reduced-height">Fall Limited Edition Sneakers</h2>
                    <p className="padding-block-600">These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                        <Price />
                    <div className="margin-block-900 frac-column gap-500">
                        <Counter callback={(totalValue:number)=> setCurrentTotal(totalValue)} />
                        <AddToCart  callback={(cartAdded:boolean)=> addToCart(cartAdded)} />   
                    </div>

                </div>
            </div>
        </div>
    </main> )
}


export  default Body