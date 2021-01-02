import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value: '');

/*If editing, it should automaically refresh the page*/
const inputRef = useRef(null)

useEffect(() =>{
    inputRef.current.focus()

})

    /*Creating a function*/
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            /*To generate a random number*/
            id: Math.floor(Math.random()*10000), 
            text: input
        });
        setInput('');
    };
    return (
        /*To stop the page from refreshing, the following line is added*/
       <form className="todo-form" onSubmit={handleSubmit}>
           {props.edit ? (
           <>
           <input 
           type= 'text'
           placeholder= 'Update your item'
           value={input}
           name='text' 
           className='todo-input edit'
           onChange={handleChange}
           ref={inputRef}
           />
           <button className="todo-button edit">Update</button>
           </>
           ) : (
            <>
            <input 
            type="text" 
            placeholder="Add a todo" 
            value={input}
            name="text" 
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button">Add Todo</button>
            </>
           )}
           
       </form>
    )
}

export default TodoForm
