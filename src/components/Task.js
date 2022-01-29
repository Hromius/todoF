/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends React.Component {
  state = { text: this.props.label };

  changeElement = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  onSubmits = (event) => {
    event.preventDefault();
    this.props.onChanges(this.props.id, this.state.text);
    this.props.onToggleHide();
  };

  render() {
    const { label } = this.props;
    const { done } = this.props;
    const { hide } = this.props;
    const { parametr } = this.props;
    const { onToggleDone } = this.props;
    const date = formatDistanceToNow(new Date(), new Date(), { includeSeconds: true });
    let change = 'new-todo ';
    let classNamesLabel = 'description ';
    let classNamesElement;

    if (parametr === 'ALL') {
      classNamesElement += 'view ';
    } else if (parametr === 'Completed' && !done) {
      classNamesElement = 'view hide';
    } else if (parametr === 'Active' && done) {
      classNamesElement = 'view hide';
    }

    if (done) {
      classNamesLabel += 'completed';
    }
    if (hide) {
      change += ' hide';
    } else { classNamesLabel += ' hide'; }
    return (
      <div className={classNamesElement}>
        <input
          className="toggle"
          type="checkbox"
          onClick={onToggleDone}
        />
        <label>
          <span className={classNamesLabel}>
            {label}
          </span>
          <form
            className="form"
            onSubmit={this.onSubmits}
          >

            <input
              type="text"
              className={change}
              onChange={this.changeElement}
              placeholder="What needs to change?"
              value={this.state.text}

            />
          </form>
          <span className="created">{date}</span>

        </label>

        <button
          type="button"
          className="icon icon-edit"
          onClick={this.onSubmits}
        />

        <button
          type="button"
          className="icon icon-destroy"
          onClick={this.props.delited}
        />

      </div>
    );
  }
}
