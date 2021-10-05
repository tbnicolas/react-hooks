import React from 'react'
import { useState } from 'react'
import './counter.css'
export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30,
        counter4 : 40,

    });

    const { counter1, counter2 } = counter;

    return (
        <>
         <h1>Counter { counter1 } </h1>   
         <h1>Counter { counter2 } </h1>   

         <button 
            className="btn btn-primary"
            onClick={ () => {
                setCounter( (globalCounter) => {
                    return (
                        {
                            ...counter,
                            counter1: globalCounter.counter1 + 1,
                        }
                    );
                });
            }}>
            +1
         </button>
        </>
    )
}
