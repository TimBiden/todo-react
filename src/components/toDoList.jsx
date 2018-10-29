import React, {Component} from 'react';
import {getToDos} from '../services/fakeToDoService';
import Pagination from './common/pagination';

// Originate state
class ToDos extends Component {
    state = {
        toDos: getToDos(),
        pageSize: 5
    };

    // Remove Completed items from ToDo list
    handleComplete = (id) => {
        const toDos = this.state.toDos.filter(t => t._id !== id);
        this.setState({toDos: toDos})
    };

    // Edit specified item
    handleEdit = (id) => {
        console.log(id);
    };

    // Handle page changes
    handlePageChange = (pageSize) => {
        console.log(pageSize);
    };

    render() {
        const length = this.state.toDos.length;
        if (length === 0) return <h4>Congrats! You've completed your entire To Do list!</h4>;

        return (<div>
            <h4>You have {length} items to do.</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">To Do</th>
                        <th scope="col">Importance</th>
                        <th scope="col">Urgency</th>
                        <th scope="col">Hours</th>
                        <th scope="col"></th>
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

                                {/* Button click - Edit item. */}
                                <td><button onClick={() => this.handleEdit(todo._id)} className='btn btn-danger btn-sm'>Edit</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination itemCount={length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />
        </div>);
    }
}

export default ToDos;
