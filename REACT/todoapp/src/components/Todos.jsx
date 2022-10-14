import React, { useReducer } from "react";
import todoReducer from "../hooks/todoReducer";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

export default function Todos() {
    const [todos, dispatch] = useReducer(todoReducer, []);
 
    return (
      <div className="container">
        <TodoInput dispatch={dispatch} />
        {
        todos.map(todo => <Todo
                key={todo.id}
                id={todo.id}
                todoName={todo.todoName}
                isComplete={todo.isComplete}
                dispatch={dispatch}     />)
        }
      </div>
    );
  };

