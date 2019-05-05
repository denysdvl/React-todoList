import React, { Component } from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddedListItem from '../added-list-item/'

import './app.css';

export default class App extends Component {
  constructor() {
   let maxId = 100;
    super();
     
    this.state = {
      todoData: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Start Awesome App', important: true, id: 3 },
        { label: 'Have a lunch', important: false, id: 4 },
        { label: 'Make Awesome App', important: true, id: 5 }
      ]
    };

    this.del = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ];
        return { todoData: newArray };
      });
    };

    this.addItemList = (text) =>{
      const newItem = {
        label: text, important: false, id: maxId++
      };
      this.setState(({todoData}) =>{
          const newArr = [
        ...todoData,
        newItem
      ];
      return { todoData: newArr };
      }); 
    };
  }

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData}
          onDeleted={this.del} />
          <AddedListItem
          onAddedItem={this.addItemList}/>
      </div>
    );
  }

}
