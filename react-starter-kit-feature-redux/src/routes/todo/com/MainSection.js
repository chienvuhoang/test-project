/**
 * Created by vuchien on 6/16/16.
 */
import React, {Component, PropTypes} from 'react';
class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {todos, actions} = this.props;
    return (
      <div style={{backgroundColor:"#dedede"}}>
        <div>Main section<a onClick={actions.addTodo.bind('FROM MAIN SECTION')}>Click me</a></div>
      </div>
    )
  }
}

export default MainSection
