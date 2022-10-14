import { ADD_TASK,TOGGLE_TASK,REMOVE_TASK } from "../ActionTypes";

  const todoReducer = (state=[], action) => {
    switch (action.type) {
      case ADD_TASK:
        return [...state, {...action.payload}];

      case TOGGLE_TASK:
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, isComplete: !todo.isComplete };
          }
          return todo;
        });

      case REMOVE_TASK:
        return state.filter((todo) => todo.id !== action.id);
      default:
        return state;
    }
  };

  export default todoReducer;