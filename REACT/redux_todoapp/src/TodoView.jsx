export default function TodoView({todo,toggleTodo,deleteTodo}){

    let{name,id,isComplete} = todo;
    return <div>
    <div>
      <p style={{ textDecoration: `${isComplete ? "line-through" : ""}` }}>
        {name}
      </p>
    </div>
    <div>
      <button onClick={() => toggleTodo(id)}>Toggle</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  </div>
}

