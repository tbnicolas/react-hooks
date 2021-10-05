import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'


export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange,handleInputChangeErrors ] = useForm({

        name: '',
        email: '',
        password:'',
        error:{
            name: '',
            email:'',
            password:'',
        }

    });

    /* const [formState, setFormState] = useState({
        name: '',
        email: '',
        password:'',
    });

    
    
    
    const handleInputChange = ({ target }) => {
        // console.log(target);

        setFormState({
            ...formState,
            [ target.name ]: target.value
            
        });
    } */
    
    const { email, name, password, error } = formValues;

    useEffect(() => {
        handleInputChangeErrors();
    }, [email,password]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
           <h1>FormWithCustomHook</h1>   
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
            { ( error.email.length > 0) && <p>{error.email}</p> }
           <div className="form-group mt-3">

               <input 
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="****"
                  value={ password }
                  onChange={ handleInputChange }/>
               
           </div>
           { ( error.password.length > 0) && <p>{error.password}</p> }
           <button type="submit" className="btn btn-primary mt-3">
                    Guardar
                 </button>
           
        </form>
    )
}
