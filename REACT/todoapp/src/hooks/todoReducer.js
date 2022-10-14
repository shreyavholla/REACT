import { v4 as uuidv4 } from "uuid";

const newTodo = (todoName) => {
    return { id: uuidv4(), todoName: todoName, isComplete: false };
  };

const todoReducer = (state=[], action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, newTodo(action.payload.name)];
      case "TOGGLE_TODO":
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, isComplete: !todo.isComplete };
          }
          return todo;
        });
      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state;
    }
  };

  export default todoReducer;
