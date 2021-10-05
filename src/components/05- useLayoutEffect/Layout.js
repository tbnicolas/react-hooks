import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import '../03-examples/multipleHook.css'


export const Layout = () => {

    
    const { counter ,increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setboxSize] = useState({});
    useLayoutEffect(() => {
        
        setboxSize(pTag.current.getBoundingClientRect());
        
    }, [quote])

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            <div className="quote">
                <p ref={ pTag }>{ quote }</p>
            </div>

            <pre>{ JSON.stringify( boxSize ) }</pre>

            <button 
                 className="btn btn-primary"
                 onClick={ increment }>
                Siguiente Quote
            </button>

        </div>
    )
}
