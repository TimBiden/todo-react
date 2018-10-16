import React, {Component} from 'react';
import {getToDos} from '../services/fakeToDoService';

class ToDos extends Component {
    state = {
        toDos: getToDos()
    };

    handleComplete = toDo => {};
    render() {
        return (<div>
            <h3>Items still to be done:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">To Do</th>
                        <th scope="col">Importance</th>
                        <th scope="col">Urgency</th>
                        <th scope="col">Estimated Hours</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.toDos.map((todo, i) =>(
                            <tr key={todo._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{todo.activity}</td>
                                <td>{todo.importance}</td>
                                <td>{todo.urgency}</td>
                                <td>{todo.hours}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>);
    }
}

export default ToDos;
