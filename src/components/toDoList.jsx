import React, {Component} from 'react';
import {getToDos} from '../services/fakeToDoService';

class ToDos extends Component {
    state = {
        toDos: getToDos()
    };

    handleComplete = toDo => {};
    render() {
        return (
            <h3>Items still to be done:</h3>
        );
    }
}

export default ToDos;
