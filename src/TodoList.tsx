import React, { useState } from "react";
import TodoTable from "./TodoTable";
import { Todolos } from "./Interfaces" ;

function TodoList() {
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [priority, setPriority] = useState<string>('');
    const [todos, setTodos] = useState<Todolos[]>([]);

    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'description') {
            setDescription(event.target.value)
        } else if(event.target.name === 'date') {
            setDate(event.target.value)
        } else if(event.target.name === 'priority') {
            setPriority(event.target.value)
        }};

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTodos = {description: description, date: date, priority: priority};
        setTodos([...todos, newTodos]);
    };

    const deleteTodo = (deleted : Todolos) => {
        setTodos(todos.filter((i) => i !== deleted))
    };

    return(
        <div className='App'>
            <form onSubmit={addTodo}>
                <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={date}/>
                <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={description}/>
                <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={ priority}/>
                <input type="submit" value="Add" />
            </form>
            <div>
            {todos.map((description : Todolos, index: number) => {
                return <TodoTable key={index} task={description} onDelete={() => deleteTodo(description)} />
            })}
            </div>
           
        </div>
    );
};

export default TodoList;