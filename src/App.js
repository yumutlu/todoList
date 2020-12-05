import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todoList: []
    };

    this.inputChange = this.inputChange.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }


  inputChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  addNewTodo(e) {
    this.setState({
      todoList: [this.state.input, ...this.state.todoList],
      input: ""
    })
    e.preventDefault();
  }


  render() {

    return (
      <div className="App">
        <form onSubmit={this.addNewTodo}>
          <label>
            To Do List:
            <hr />
            <input type="text" value={this.state.input} onChange={this.inputChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
        {this.state.todoList.map(item => <li key={item}>{item}</li>)}
      </div>
    )
  }
}
