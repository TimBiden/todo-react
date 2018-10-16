import React, {Component} from 'react';
import {getToDos} from '../services/fakeToDoService';

class ToDos extends Component {
    state = {
        toDos: getToDos()
    };

    handleComplete = toDo => {};
    render() {
        return (
            <div>
                <h3>Items still to be done:</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Order</th>
                            <th scope="col">To Do</th>
                            <th scope="col">Importance</th>
                            <th scope="col">Urgency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ToDos;
