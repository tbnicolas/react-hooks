import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({x:0, y:0 });

    const { x, y } = coords;


    useEffect(() => {

        //Cuerpo del efecto

        const mouseMove = (e)=>{
            const coors = { x:e.x, y:e.y };
            setcoords(coors);
            //console.log(coors);
         }

        window.addEventListener('mousemove', mouseMove);


        //fin del cuerpo del efecto

        //Inicio fase de limpieza, es decir se ejecuta cuando se desmonta es decir cuando ya deja de mostrarse por cualquier condicion
        return () => {
            console.log('Componente desmontado');
            //Remuevo la funcion de la refetencia 'moueseMove'
            window.removeEventListener('mousemove', mouseMove);
        }
        //Fin fase de limpieza

        //Dependencia que queramos escuchar, si no tiene nada se ejecuta una vez el componente se muestre por primera vez
    }, [])

    return (
        <>
            <h3>Eres Genial </h3>
            <p>
                x:{x}, y:{y}
            </p>
        </>
    )
}
