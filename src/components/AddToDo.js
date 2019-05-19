import React from 'react';
import { Component } from 'react';
import moment from 'moment';
import Button from '@material-ui/core/Button';

class AddToDo extends Component {
  constructor(props) {
    super(props);
    const date = moment().format('DD/MM/YYYY');

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: '',
      content: '',
      date: date
    }
  }
 
  handleClick() {
    this.props.onAddToDo(this.state);
  }

  handleChange(e) {
    const text = e.target.value;
    this.setState({title: text});
  }

  handleTextChange(e) {
    const text = e.target.value;
    this.setState({content: text});
  }
 
  render() {
    return (
      <fieldset>
        <input 
          type="text"
          value={this.state.title}
          onChange={this.handleChange.bind(this)}
        />
        <textarea value={this.state.content} onChange={this.handleTextChange.bind(this)} />
        <Button
            variant="contained" 
            color="primary"
            onClick={this.handleClick}>Add To Do</Button>
      </fieldset>
    );
  }
}

export default AddToDo;