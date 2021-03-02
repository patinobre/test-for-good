import React, { Component } from "react";

export class TodoList extends Component {

    render() {
        return (
            <div>
                <label>
                    Cadastrar nova categoria de erro:
                    <input onKeyUp={this.props.onAddTask} autoFocus type='text'/>
                    <p>Categorias:</p>
                    <ul>
                        {this.props.tasks.map(task =>{
                            return <li>{task}</li>
                        })}
                    </ul>
                    <table align="center" border="1">
                        {this.props.tasks.map(task =>{
                            return <tr><td>{task}</td></tr>
                        })}
                    </table>
                </label>
            </div>

        )
    }
}
