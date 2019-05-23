import React from 'react';
import { Component } from 'react';
import AddToDo from './AddToDo';
import ToDo from './ToDo';
import Grid from '@material-ui/core/Grid';



class ToDos extends Component {
  constructor(props) {
    super(props);
    this.addToDo = this.addToDo.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      toDos: []
    }
  }
  deleteItem(el) {
    const key = el.dataKey;

    const newState = this.state.toDos.filter((el, i) => i !== key)

    this.setState({toDos: newState});
  }
  addToDo(toDoItem) {
    const updateToDos = toDoItem;
    this.setState({'toDos': [...this.state.toDos, updateToDos]})
  }
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <AddToDo onAddToDo={this.addToDo}></AddToDo>
        </Grid>
        <Grid item xs={12}>
          {this.state.toDos.map((toDo, index) => 
            <ToDo toDo={toDo} key={index} dataKey={index} handleDelete={this.deleteItem}></ToDo>
          )}
        </Grid>
      </Grid>
    );
  }
}


export default ToDos;