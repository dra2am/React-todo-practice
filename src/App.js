import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { without } from "lodash";
class App extends React.Component {
  state = {
    list: []
  };

  //temp hold state of current list as var
  //take tempState recieved from child and add to list array
  //set this as new state
  addTodo = newTodo => {
    let tempList = this.state.list;
    tempList.unshift(newTodo);
    this.setState({
      list: tempList
    });
  };

  //ISSUES WITH DELETING
  //take item from tasklist.js
  //get rid of it with lodash
  deleteItem = item => {
    let tempList = this.state.list;
    //without: lodash method, takes array in first arg, returns array without what you specified in second arg
    let removeItem = without(tempList, item);
    this.setState({
      list: removeItem
    });
  };

  //contains the state of list
  //passes it to child
  todoList = this.state.list;

  render() {
    return (
      <div>
        <AddTask addTodo={this.addTodo} />
        <TaskList todoList={this.todoList} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
