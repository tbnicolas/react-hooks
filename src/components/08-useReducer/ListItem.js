import React from 'react';
import PropTypes from 'prop-types';

import './style.css';


export const ListItem = ({index,todo,handleDelete,handleToggle}) => {

    console.log('Se Ejecuto ListItem');

    return (
        <li
            key={ todo.id }
            className="list-group-item"
        >
            <p className={`${ todo.done  && 'complete' }`} onClick={()=>{ handleToggle(todo.id)}}> { index +1 }. { todo.desc } </p>
            <button
                className="btn btn-danger ms-5"
                onClick={
                    ( ) => {
                        handleDelete(todo.id);
                    }
                }
            >
                borrar
            </button>
        </li>
    );
}

ListItem.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}