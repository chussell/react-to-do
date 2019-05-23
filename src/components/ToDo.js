import React from 'react';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  card: {
    maxWidth: 345,
    width: '100%',
    margin: '30px auto'
  }
};


class ToDo extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleDelete(this.props);
  }

  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardContent>
          <small>{this.props.toDo.date}</small>
          <h4>{this.props.toDo.title}</h4>
          <p>{this.props.toDo.content}</p>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Delete" onClick={this.handleClick}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

ToDo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToDo);