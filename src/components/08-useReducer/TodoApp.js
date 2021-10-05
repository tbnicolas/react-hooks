import React, { useCallback, useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './style.css';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) ||  [];
}




export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

   
    useEffect(() => {
        
        localStorage.setItem('todos',JSON.stringify( todos ));

    }, [todos]);

    /* const handleDelete = useCallback(
        (todoId) => {
       

            const action = {
    
                type: 'delete',
                payload: todoId,
            }  
    
            dispatch( action );
    
    
        },
        [dispatch],
    ); */

    const handleDelete = (todoId) => {
       

        const action = {

            type: 'delete',
            payload: todoId,
        }  

        dispatch( action );


    }

   /*  const handleToggle = useCallback(
        ( todoId ) => {

            dispatch({
                type:'toggle',
                payload:todoId
            })
    
        },
        [dispatch],
    ); */
    
    const handleToggle = ( todoId ) => {

        dispatch({
            type:'toggle',
            payload:todoId
        })

    }

    const handleAddTodo = useCallback(
        ( newTodo ) => {
       

            dispatch( newTodo );
        },
        [dispatch],
    );
    
    
    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">                      
                        <TodoList 
                            todos={ todos }
                            handleDelete={ handleDelete }
                            handleToggle={ handleToggle }
                        />               
                    </ul>
                </div>
                <div className="col-5">
                <TodoAdd 
                    handleAddTodo={ handleAddTodo }
                />
            </div>
                
            </div>
        </div>
    )
}
