import {useState} from 'react';

function Counter(props: { callback: (arg0: number) => void; })
{
   const [counterValue, setTotalValue] = useState(0);

   function handleClick(decrement: boolean)
   {
    
    if(decrement)
    {
        if(counterValue > 0 )
        {
            setTotalValue(counterValue - 1);
            props.callback(counterValue - 1)
        }
            
    }
    else
    {
        if(counterValue < 3)
        {
            setTotalValue(counterValue + 1); 
            props.callback(counterValue + 1);
         }
    }
       
   }

    return (<div className="padding-inline-50 flexible-stretch-button bg-neutral-light-grayish-blue">
                <button id="decrementQ" className="padding-50" onClick={()=>handleClick(true)} >
                    <img src="./assets/icon-minus.svg" alt="" />
                </button>
                <div className="width-100">
                    <p id="totalQ" className="font-weight-bold text-neutral">{counterValue}</p>
                </div>

                <button onClick={()=>handleClick(false)} id="incrementQ" className="padding-50">
                    <img src="./assets/icon-plus.svg" alt=""/>
                </button>
            </div>);
}

export default Counter