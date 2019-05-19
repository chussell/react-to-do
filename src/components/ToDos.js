import React from 'react';
import { Component } from 'react';
import AddToDo from './AddToDo';
import ToDo from './ToDo';
import Grid from '@material-ui/core/Grid';

const toDos = 
  [
    {
    "date": "19/05/2019",
    "title": "Heading",
    "content": "Lorem Ipsum"
    },
    {
      "date": "18/05/2019",
      "title": "Heading 2",
      "content": "Lorem Ipsum 2"
    }
  ];



class ToDos extends Component {
  constructor(props) {
    super(props);
    this.addToDo = this.addToDo.bind(this);
    this.state = {
      toDos: toDos
    }
  }
  addToDo(toDoItem) {
    const updateToDos = [...this.state.toDos, toDoItem];
    this.setState({'toDos': updateToDos})
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
          {this.state.toDos.map((toDo, i) => 
            <ToDo toDo={toDo} key={i}></ToDo>
          )}
        </Grid>
      </Grid>
    );
  }
}


export default ToDos;