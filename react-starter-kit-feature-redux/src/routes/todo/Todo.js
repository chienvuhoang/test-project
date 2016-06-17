/**
 * Created by vuchien on 6/11/16.
 */
import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Todo.css';
import * as todoActions from '../../actions/todoAction';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import MainSection from './com/MainSection';

class Todo extends Component {
  render() {
    const {todos, actions} = this.props;
    return (
      <div>
        <a onClick={todoActions.addTodo.bind(this,'Value input')}>Information</a>
        <h2>List todos</h2>
        <MainSection todos={todos} actions={actions}/>
        <a onClick={actions.addTodo.bind('Click actions in main file')}>Click actions in main file</a>
        <h2>List of todos</h2>
        <ul>
          {todos.map(todo =>
            <li key={todo.id}><a>{todo.text}</a></li>
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  }
}

export default withStyles(s)(Todo);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo, s)
