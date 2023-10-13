import {useRef, useState } from "react";
import useClickOutside from "../common/useClickOutside";

function Cart(props: {addedToCart:boolean; totalCartItems: number;})
{
    const [showCartDiv,setShowCartDiv] = useState(false);
    const cartDivRef = useRef(null);
    
    useClickOutside(cartDivRef, () =>{
        setShowCartDiv(false);
    })

    
    return (<div className="flex gap-500">
                <button id="cartButton" onClick={()=>setShowCartDiv(!showCartDiv)}><img src="assets/icon-cart.svg" alt="cart" /></button>
                {   props.totalCartItems !== 0 ? <div className="total-items" id="totalItemsDiv">
                 <p id="totalItemsTip">{props.totalCartItems}</p>
                </div>: <></>}
               <div ref={cartDivRef} id="cartContainer" className="cart-div" style={{visibility:`${showCartDiv ? "visible": "hidden"}`}}>
                        <div className="faint-underline">
                            <p className="text-neutral-black font-weight-bold padding-100">Cart</p>
                        </div>

                        {props.totalCartItems === 0 ?   <div id="emptyCart" className="center-p">
                            <p className="font-weight-bold">Your cart is empty.</p>
                        </div>: <div id="filledCart" className="center-grid removed-content">

                            <div>
                                <img src="./assets/image-product-1-thumbnail.jpg" alt=""
                                    className="cursor-pointer cart-div-image" />
                                <div>
                                    <p className="font-weight-bold">Fall Limited Edition Sneakers</p>
                                    <p>$125.00 x <span id="totalSelected">{props.totalCartItems}</span> <b
                                            className="font-weight-bold text-neutral-black" id="totalPrice">${props.totalCartItems * 125}</b></p>
                                </div>

                                <img src="./assets/icon-delete.svg" alt="icon svg" className="icon-svg" />
                            </div>                           
                            <button>Checkout</button>
                        </div>}
                    </div>
            </div>);
}

export default Cart
