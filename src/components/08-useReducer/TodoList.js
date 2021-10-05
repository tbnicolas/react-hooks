import React from 'react';
import PropTypes from 'prop-types';


import './style.css';
import { ListItem } from './ListItem';

export const TodoList = React.memo(({todos,handleDelete,handleToggle}) => {

    console.log('Se Ejecuto TodoList');

    return (
        <ul className="list-group list-group-flush">
            {
                todos.map(
                    (todo, index) => {
                        return (
                            <ListItem 
                                key={ todo.id }
                                index={index}
                                todo={ todo }
                                handleDelete={ handleDelete }
                                handleToggle={ handleToggle }
                            />
                        );
                        
                    }
                )
            }
        </ul>
    )
})

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}