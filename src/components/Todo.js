import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import TodoList from './TodoList';
import  '../sass/Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleOnchange = value => {
    this.setState({ value });
  };

  handleAddTodo = () => {
    const { value } = this.state;
    if(value && value !== null && !this.props.todoList.includes(value)){
      this.props.addTodo(value);
      this.setState({ value: "" });
    }
  };

  
  render() {
    return (
      <div className="col s6 input-box">
        <input
          type="text"
          value={this.state.value}
          className="input-field-todo"
          placeholder="Add New Todo Item.."
          onChange={e => this.handleOnchange(e.target.value)}
        />
        <input type="button" value="ADD" onClick={() => this.handleAddTodo()} className="waves-effect waves-light btn"/>
        <ul className="collection">
          {this.props.todoList.map((item, i) => (
            <TodoList key={i} value={item} index={i}/>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todoList: state.todos };
}

export default connect(
  mapStateToProps,
  actions
)(Todo);
