import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class TodoList extends Component {

    handleDeleteItem = (index) => {
        this.props.deleteTodo(index)
    }

    render ({ value, index } = this.props) {
        return (
            <li className="collection-item">
                <p class="badge">{value} <input type='button' className="waves-effect waves-light btn-small" value='delete' onClick={() => this.handleDeleteItem(index)}/></p>
            </li>
        )
    }
}

export default connect(null, actions)(TodoList);