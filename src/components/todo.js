import React, { Component } from "react";

export class TodoList extends Component {

    render() {
        return (

             <div>
             <nav>
             <ul> <font color="#000000"><b>USER INTERFACE</b></font> 
                 {this.props.tasks.map(task =>{
                     return <li><a href="">{task}</a></li>
                 })}
             </ul>
             </nav>

                    <label>
                      Adicionar  Erro:&nbsp;
                      <input onKeyUp={this.props.onAddTask} autoFocus type='text'/>


                </label>
              </div>


        )
    }
}
