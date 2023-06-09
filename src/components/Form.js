import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({ input, setInput, todos, setTodos, count, setCount }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
    };

    useEffect(() => {        
        setInput("")
    }, [setInput]);


    useEffect(() => { 
        setCount(
            todos.filter((todo) => (!todo.completed)).length
            )}, 
        [todos.filter((todo) => (!todo.completed)).length])

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput("");
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder="Enter task ..." 
            className="task-input" 
            value={input}
            required
            onChange={onInputChange} 
            />
            <button type="submit" className="button-add">
                Submit         
            </button>
        </form>
    )
}

export default Form;