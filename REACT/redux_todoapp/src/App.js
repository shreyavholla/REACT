
import { Component, createRef } from 'react';
import './App.css';
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addTask, removeTask, toggleTask } from './redux/Actioncreators';
import TodoView from './TodoView';

// const newTodo = (todoName) => {
//   return { id: uuidv4(), todoName: todoName, isComplete: false };
// };

class App extends Component{

    todoRef = createRef();
    handleClick = () => {
      let todo = {
        name: this.todoRef.current.value,
        id:uuidv4(),
        isComplete:false
      }

      this.props.addNewTodo(todo);
    }
    render() {

      return <div>
         <form>
        <input type="text" placeholder="Type your todo...." ref={this.todoRef}/>
        <button type="button" onClick={this.handleClick}>Add ToDo</button>
      </form>
       
        <div>
        {
         this.props.todos.map(todo => <TodoView  
           key={todo.id}
           todo={todo}
           deleteTodo={this.props.deleteTodo}
           toggleTodo={this.props.toggleTodo}/>)}
        </div>

        
      </div>
    }

    

    
}

function mapStateToProps(state){

  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch){

return {
  addNewTodo: (todo) => dispatch(addTask(todo)),
  deleteTodo : (id) => dispatch(removeTask(id)),
  toggleTodo : (id) => dispatch(toggleTask(id))
}
}

export default connect(
mapStateToProps,
mapDispatchToProps)(App);