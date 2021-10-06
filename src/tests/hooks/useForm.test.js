

import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    
    const initialForm = {

        name: 'Nicolás',
        email: 'njtrujillo7@gmail.com'

    }

    test('debe de regresar un formulario por defecto', () => {
       

        const { result } = renderHook( () => useForm(initialForm) );

        const [ values,handleInputChange,reset ] = result.current;

        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toEqual( 'function' );
        expect( typeof reset ).toEqual( 'function' );


    });


    test('debe de cambiar el valor del formulario( cambiar name )', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );

        const[,handleInputChange] = result.current;

        const target = {

            name: "name",
            value: "Nicolás José"

        }

        act(
            () => {
                handleInputChange({target});
            }
        );

        const [ values ] = result.current;

        expect( values.name ).toBe("Nicolás José");


    });

    test('debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook( () => useForm(initialForm) );

        const[,handleInputChange,reset] = result.current;

        const target = {

            name: "name",
            value: "Nicolás José"

        }

        act(
            () => {
                handleInputChange({target});
                reset();
            }
        );

        const [ values ] = result.current;

        expect( values ).toEqual(initialForm);
    });
    
    
    

});
