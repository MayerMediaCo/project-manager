import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTaskName = this.onChangeTaskName.bind(this);
    this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
    this.onChangeTaskDue = this.onChangeTaskDue.bind(this);
    this.onChangeTaskUser = this.onChangeTaskUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      task_name: "",
      task_description: "",
      task_due: "",
      task_user: "",
      task_completed: false
    };
  }

  onChangeTaskName(e) {
    this.setState({
      task_name: e.target.value
    });
  }

  onChangeTaskDescription(e) {
    this.setState({
      task_description: e.target.value
    });
  }

  onChangeTaskDue(e) {
    this.setState({
      task_due: e.target.value
    });
  }

  onChangeTaskUser(e) {
    this.setState({
      task_user: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('form submitted')
    console.log(`Task: ${this.state.task_name}`);
    console.log(`Task Description: ${this.state.task_description}`);
    console.log(`Task Due: ${this.state.task_due}`);
    console.log(`Task User: ${this.state.task_user}`);
  }

  render() {
    return (
      <div className="create-task">
        <h3>Create Task</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Task: </label>
            <input
              type="text"
              value={this.state.task_name}
              onChange={this.onChangeTaskName}
            />
          </div>

          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              value={this.state.task_description}
              onChange={this.onChangeTaskDescription}
            />
          </div>

          <div className="form-group">
            <label>Due: </label>
            <input
              type="date"
              value={this.state.task_due}
              onChange={this.onChangeTaskDue}
            />
          </div>

          <div className="form-group">
            <label>User: </label>
            <input
              type="text"
              value={this.state.task_user}
              onChange={this.onChangeTaskUser}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Add Task"/>
          </div>

        </form>
      </div>
    );
  }
}

export default CreateTodo