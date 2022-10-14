import React from 'react';
export default function Todo({ dispatch, id, isComplete, todoName }){
    const handleDelete = (id) => {
      dispatch({
        type: "DELETE_TODO",
        payload: { id: id },
      });
    };
    const handleToggle = (id) => {
      dispatch({
        type: "TOGGLE_TODO",
        payload: { id: id },
      });
    };
    return (
      <div>
        <div>
          <p style={{ textDecoration: `${isComplete ? "line-through" : ""}` }}>
            {todoName}
          </p>
        </div>
        <div>
          <button onClick={() => handleToggle(id)}>Toggle</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    );
  };