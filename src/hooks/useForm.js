import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
         console.log(target);
    
        setValues({
             ...values,
             [ target.name ]: target.value
             
         });
     }

     const handleInputChangeErrors = () => {
        const { password,email,error }= values;
        const patternEmail = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const patterPassword = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

        let errorJson = {};

        if ( ! email.match(patternEmail) && email.length > 0) {

            errorJson['email'] = 'No existe coincidencia, debe ser parecido a example@example.com';

            
        } else {
            errorJson['email'] = '';

        }

        

        if (! password.match( patterPassword ) && password.length > 0 ) {
            errorJson['password'] = 'Minimo 8 letras, al menos una letra y un numero';

        } else {
            errorJson['password'] = '';
        }

        
        setValues({
            ...values,
            error:{
                ...error,
                ...errorJson
            }
        });
    }

     return [ values, handleInputChange,reset,handleInputChangeErrors];
}
