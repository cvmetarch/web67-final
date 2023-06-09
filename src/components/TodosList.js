import React from 'react';

const TodosList = ({ todos, setTodos, count, setCount, filtered, setFiltered }) => {
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

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const showUncomplete = () => {
        if (filtered === false) {
            setFiltered(true)
        } else {
            setFiltered(false)
        }
    }

    return (
        <div>
            
                <div className="uncomp">
                    <div className='uncomp-checkbox'>
                        <button 
                        className={`button-filter${filtered?"":"w"}`}
                        onClick={() => showUncomplete()}
                        >
                        <i className="fa fa-check-circle"></i>
                        </button>
                        View Uncompleted tasks or
                    </div>                
                    <a href='/withDone=1'>Completed tasks</a>
                </div>
            

            {todos.filter((todo) => (!filtered))
            .map((todo) =>(
                <li className='list-item' key={todo.id}>                    
                    <div>
                        <button 
                        className={`button-complete${todo.completed ? "w" :""}`}                          
                        onClick={() => handleComplete(todo)}
                        >
                            <i className="fa fa-check-circle"></i>
                        </button>
                        
                        <input 
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" :""}`}
                        onChange={(event) => event.preventDefault()}
                        />

                        <button 
                        className="button-delete task-button" 
                        onClick={() => handleDelete(todo) }
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            )
            )}
            {todos.filter((todo) => (filtered) && (!todo.completed))
            .map((todo) =>(
                <li className='list-item' key={todo.id}>                    
                    <div>
                        <button 
                        className="button-complete"
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

                        <button 
                        className="button-delete task-button" 
                        onClick={() => handleDelete(todo) }
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            )
            )}            
        </div>
    )
}

export default TodosList;
