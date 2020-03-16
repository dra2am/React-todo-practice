import React from "react";

class TaskList extends React.Component {
  render() {
    return (
      //the state of list is passed as a prop
      //for each object in todoList, the following jsx will be created
      <div className='container'>
        {this.props.todoList.map((item, index) => (
          <div className='card-body' key={index}>
            <h5 className='card-title'>{item.taskName}</h5>
            <small>{item.date}</small>
            <p className='card-text'>{item.description}</p>
            {/* takes item from map */}
            <button
              onClick={() => this.props.deleteItem(item)}
              className='btn btn-small btn-danger'
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default TaskList;
