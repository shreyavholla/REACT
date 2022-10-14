import React, { useState } from 'react';
export default function TodoInput({ dispatch }){
    const [todoName, setTodoName] = useState("");
    
    const handleChange = (evt) => {
      setTodoName(evt.currentTarget.value);
    };
    const handleSubmit = (evt) => {
      evt.preventDefault();
      dispatch({ type: "ADD_TODO", payload: { name: todoName } });
      setTodoName("");
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your todo...."
          value={todoName}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  };