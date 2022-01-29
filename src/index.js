/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

import React from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

export default class App extends React.Component {
  maxID = 50;

  state = {
    taskLists: [],
    parametr: [],
  };

  filters = (param) => {
    this.setState((state) => {
      if (param === 'ALL') {
        state.parametr = param;
      } else if (param === 'Active') {
        state.parametr = param;
      } else if (param === 'Completed') {
        state.parametr = param;
      }
      return { parametr: state.parametr };
    });
  };

  clearCompleted = () => {
    this.setState((state) => {
      const newArr = state.taskLists.filter((el) => !el.done);
      return {
        taskLists: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      const index = state.taskLists.findIndex((el) => el.id === id);

      const oldItem = state.taskLists[index];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArr = [
        ...state.taskLists.slice(0, index),
        newItem,
        ...state.taskLists.slice(index + 1)];

      return {
        taskLists: newArr,

      };
    });
  };

  onToggleHide = (id) => {
    this.setState((state) => {
      const index = state.taskLists.findIndex((el) => el.id === id);

      const oldItem = state.taskLists[index];
      const newItem = { ...oldItem, hide: !oldItem.hide };
      const newArr = [
        ...state.taskLists.slice(0, index),
        newItem,
        ...state.taskLists.slice(index + 1)];

      return {
        taskLists: newArr,

      };
    });
  };

  deliteItem = (id) => {
    this.setState((state) => {
      const index = state.taskLists.findIndex((el) => el.id === id);

      const newArr = [
        ...state.taskLists.slice(0, index),
        ...state.taskLists.slice(index + 1)];

      return { taskLists: newArr };
    });
  };

  changeElement = (id, text) => {
    this.setState((state) => {
      const index = state.taskLists.findIndex((el) => el.id === id);

      const oldItem = state.taskLists[index];

      const newIndex = { ...oldItem, label: text };

      const newArr = [
        ...state.taskLists.slice(0, index),
        newIndex,
        ...state.taskLists.slice(index + 1),
      ];
      return { taskLists: newArr };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState((state) => {
      const newArr = [
        ...state.taskLists.slice(), newItem,
      ];
      return { taskLists: newArr };
    });
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      hide: true,
      id: this.maxID++,
    };
  }

  render() {
    const { taskLists, parametr } = this.state;
    const itemsLeft = taskLists.filter((element) => !element.done).length;

    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.addItem} />
        <section className="main">
          <TaskList
            tasks={taskLists}
            parametr={parametr}
            delited={this.deliteItem}
            onToggleDone={this.onToggleDone}
            onToggleHide={this.onToggleHide}
            changeElement={this.changeElement}
            showComplited={this.showComplited}
          />
        </section>
        <Footer
          left={itemsLeft}
          clearCompleted={this.clearCompleted}
          showComplited={this.showComplited}
          filters={this.filters}
        />

      </section>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
