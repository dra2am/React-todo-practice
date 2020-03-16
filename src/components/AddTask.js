//WORKING AS EXPECTED
import React from "react";

class AddTask extends React.Component {
  state = {
    taskName: "",
    date: "",
    description: ""
  };
  //prevent default
  //adds todo to app.js empty list (need a method for this)
  //refresh state to blank
  onFormSubmit = event => {
    event.preventDefault();
    let tempState = {
      taskName: this.state.taskName,
      date: this.state.date,
      description: this.state.description
    };

    this.props.addTodo(tempState);

    this.setState({
      taskName: "",
      date: "",
      description: ""
    });
  };

  //need to take value of input and set the states as the value
  onValueChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  //
  render() {
    return (
      <div className='container mt-4'>
        <form onSubmit={this.onFormSubmit}>
          <div className='form-group'>
            <label htmlFor='taskName'>Todo Item</label>
            <input
              type='text'
              className='form-control'
              name='taskName'
              placeholder='Name for task'
              value={this.state.taskName}
              onChange={this.onValueChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='taskName'>Date</label>
            <input
              type='date'
              className='form-control'
              name='date'
              placeholder='Name for task'
              value={this.state.date}
              onChange={this.onValueChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleFormControlTextarea1'>Description</label>
            <textarea
              className='form-control'
              name='description'
              id='exampleFormControlTextarea1'
              rows='3'
              value={this.state.description}
              onChange={this.onValueChange}
            ></textarea>
            <button type='submit' className='btn btn-primary mt-2'>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddTask;
