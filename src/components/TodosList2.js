import React from 'react';

const TodosList2 = ({ todos, setTodos, count, setCount }) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed };
            }
            return item;
            })
        );
    };

    return (
        <div>           
             <div className="uncomp">
                <div className='uncomp-checkbox'>and Completed {todos.length-count} task(s)</div>
                <a href='/'>Back to Home</a>
            </div>            

            {todos.filter((todo) => (todo.completed))
            .map((todo) =>(
                <li className='list-item' key={todo.id}>                    
                    <div>
                        <button 
                        className="button-completew"
                        onClick={() => handleComplete(todo)}
                        >
                            <i className="fa fa-check-circle"></i>
                        </button>
                        
                        <input 
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(event) => event.preventDefault()}
                        />                        
                    </div>
                </li>
            )
            )}                     
        </div>
    )
}

export default TodosList2;
