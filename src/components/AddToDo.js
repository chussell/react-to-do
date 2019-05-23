import React from 'react';
import { Component } from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  cardContent: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cardGridItem: {
    width: '100%'
  }
};

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
    this.setState({
      title: '',
      content: ''
    })
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
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
        <Grid item xs={6} className={this.props.classes.cardGridItem}>
          <Card>
            <CardContent className={this.props.classes.cardContent}>
                <TextField
                  id="todo-title"
                  label="Title"
                  value={this.state.title}
                  onChange={this.handleChange.bind(this)}
                  margin="normal"
                />

                <TextField
                  id="todo-multiline"
                  label="Content"
                  multiline
                  rows="4"
                  value={this.state.content}
                  onChange={this.handleTextChange.bind(this)}
                  margin="normal"
                />
                <Button
                    variant="contained" 
                    color="primary"
                    onClick={this.handleClick}>Add To Do</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

AddToDo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddToDo);