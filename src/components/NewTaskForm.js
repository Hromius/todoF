/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';

export default class NewTaskForm extends React.Component {
  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { label } = this.state;
    event.preventDefault();
    this.props.onItemAdded(label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            onChange={this.onLabelChange}
            placeholder="What needs to be done?"
            value={this.state.label}
          />
          <button className="form_button" type="button">
            ADD
          </button>
        </form>
      </header>
    );
  }
}
