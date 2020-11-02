/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import Credits from '../credits/credits';
import Header from '../header/header';
import Footer from '../todo/footer/footer';
import Head from '../todo/head/head';
import Main from '../todo/main/main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'First', checked: true, id: 1 },
        { label: 'Second', checked: false, id: 2 },
        { label: 'Third', checked: false, id: 3 },
      ],
      filter: 'all',
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleChecked = this.onToggleChecked.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.setFilterItem = this.setFilterItem.bind(this);
    this.DeleteComplete = this.deleteComplete.bind(this);
    this.setAllToComplete = this.setAllToComplete.bind(this);

    this.maxId = 4;
  }

  onToggleChecked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, checked: !old.checked };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];

      return {
        data: newArr,
      };
    });
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  // eslint-disable-next-line class-methods-use-this
  setFilterItem(item, filter) {
    if (filter === 'complete') {
      return item.filter((element) => element.checked);
    }
    if (filter === 'active') {
      return item.filter((element) => !element.checked);
    }
    if (filter === 'all') {
      return item;
    }
    return 0;
  }

  setAllToComplete() {
    this.setState(({ data }) => {
      const newArr = data.map((element) => {
        // eslint-disable-next-line no-param-reassign
        element.checked = true;
        return element;
      });

      return {
        data: newArr,
      };
    });
  }

  deleteComplete() {
    const { data } = this.state;
    data.forEach((element) => {
      if (element.checked) {
        this.deleteItem(element.id);
      }
    });
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  }

  addItem(value) {
    const newItem = {
      label: value,
      checked: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  render() {
    const { filter, data } = this.state;
    const checks = data.filter((item) => item.checked).length;

    const show = this.setFilterItem(data, filter);

    return (
      <div>
        <Header />
        <div className="todo">
          <Head onAdd={this.addItem} AllComplete={this.setAllToComplete} />
          <Main
            posts={show}
            onDelete={this.deleteItem}
            onToggleChecked={this.onToggleChecked}
          />
          <Footer
            length={data.length - checks}
            filter={filter}
            onFilterSelect={this.onFilterSelect}
            data={data}
            DeleteComplete={this.deleteComplete}
          />
        </div>
        <Credits />
      </div>
    );
  }
}
