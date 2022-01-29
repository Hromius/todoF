/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import propTypes from 'prop-types';

function Footer({ left, filters, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {left}
        {' '}
        items left
      </span>
      <ul className="filters">
        <li>
          <button
            type="button"
            className="selected"
            onClick={() => {
              filters('ALL');
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              filters('Active');
            }}
          >
            Active
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => {
              filters('Completed');
            }}
          >
            Completed
          </button>
        </li>
      </ul>

      <button
        type="button"
        onClick={clearCompleted}
        className="clear-completed"
      >
        Clear completed

      </button>
    </footer>
  );
}

Footer.defaultProps = {

  left: [],
  filters: () => {},
  clearCompleted: () => {},
};

Footer.propTypes = {
  left: propTypes.number,
  filters: propTypes.func,
  clearCompleted: propTypes.func,
};

export default Footer;
