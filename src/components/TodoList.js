import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const[todos, setTodos] = useState([]);

    //Adding Todo's //
    const addTodo = todo => {
        //If there are no letters in the typebox, it will not showup anything//
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        //Add todo Function//
        const newTodos =  [todo, ...todos]

        setTodos(newTodos);
    };
     //For editing the items in the list//
     const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item=>(item.id === todoId ? newValue: item))
        );
    };

    //For removing the items from the list//
    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }
   

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }
     
    return (
        <div>
          <h1>What's the plan for Today?</h1>  
          <TodoForm onSubmit={addTodo} />
          <Todo 
            todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}
          />
        </div>
    )
}

export default TodoList
