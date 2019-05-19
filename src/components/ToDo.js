import React from 'react';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

  render() {
    return (
      <Card className={this.props.classes.card} key={this.props.key}>
        <CardContent>
          <small>{this.props.toDo.date}</small>
          <h4>{this.props.toDo.title}</h4>
          <p>{this.props.toDo.content}</p>
        </CardContent>
      </Card>
    );
  }
}

ToDo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToDo);