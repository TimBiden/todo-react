import React, {Component} from 'react';
import {getToDos} from '../services/fakeToDoService';

// Originate state
class ToDos extends Component {
    state = {
        toDos: getToDos()
    };

    // Remove Completed items from ToDo list
    handleComplete = (id) => {
        const toDos = this.state.toDos.filter(t => t._id !== id);
        this.setState({toDos: toDos})
    };

    render() {
        if (this.state.toDos.length === 0) return <h4>Congrats! You've completed your entire To Do list!</h4>;

        return (<div>
            <h4>You have {this.state.toDos.length} items to do.</h4>
            <h3>Items still to be done:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">To Do</th>
                        <th scope="col">Importance</th>
                        <th scope="col">Urgency</th>
                        <th scope="col">Estimated Hours</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {/* List ToDo items with basic info */}
                    {this.state.toDos.map((todo, i) =>(
                            <tr key={todo._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{todo.activity}</td>
                                <td>{todo.importance}</td>
                                <td>{todo.urgency}</td>
                                <td>{todo.hours}</td>

                                {/* Button click - Send item ID to handleComplete function. */}
                                <td><button onClick={() => this.handleComplete(todo._id)} className='btn btn-danger btn-sm'>Completed</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>);
    }
}

export default ToDos;
