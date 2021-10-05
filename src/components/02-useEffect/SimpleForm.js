import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { email, name } = formState;


    // El return en un useEffect es como si efecturamos la fase de limpieza

    useEffect(()=>{
        //console.log('HEY')
    },[]);

    // Cada vez que el formState cambie se ejecuta la funcion 
    useEffect(()=>{
        //console.log('formState cambio');
    },[formState]);


    useEffect(()=>{
        //console.log('Email cambio');
    },[email]);



    const handleInputChange = ({ target }) => {
       // console.log(target);

        setFormState({
            ...formState,
            [ target.name ]: target.value
            
        });
    }

    return (
        <>
           <h1>useEffect</h1>   
           <hr/>

           <div className="form-group">

               <input 
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Tu nombre"
                  autoComplete="off"
                  value={ name }
                  onChange={ handleInputChange }/>
               
           </div>

           <div className="form-group mt-3">

               <input 
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email@email.com"
                  autoComplete="off"
                  value={ email }
                  onChange={ handleInputChange }/>
               
           </div>

           { ( name === '123') && <Message />}
        </>
    )
}
