import './Header.css'
import Avatar from './Avatar'
import Cart from './Cart'
import Listing from './Listing'
import Logo from './Logo'
import { useState } from 'react'

function Header(props: { addedToCart: boolean; totalCartItems: number })
{
    const [navVisible, setNavVisible] = useState(false);

    return (
        <header className="primary-header">
        <div className="container underline">
            <div className="nav-wrapper">
                <div className="flex gap-500">
                    <Logo callback={()=>setNavVisible(!navVisible)}/>
                    <Listing callback={()=>setNavVisible(!navVisible)} navVisibilty={navVisible} />
                </div>
                <div className='flex gap-500'>
                    <Cart addedToCart={props.addedToCart} totalCartItems={props.totalCartItems} />
                    <Avatar />
                </div>  
              </div>
            </div>
    </header> )
}


export  default Header