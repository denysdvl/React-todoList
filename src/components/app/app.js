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
        createTodoItem('Drink Coffee'),
        createTodoItem('Make Awesome App'),
        createTodoItem('Start Awesome App'),
        createTodoItem('Have a lunch'),
        ],
        term: ""
    }; 

    function createTodoItem(label) {
      return ({
         label ,
          done: false,
           important: false,
            id: maxId++ 
         });
    }

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
      const newItem = createTodoItem(text);
      this.setState(({todoData}) =>{
          const newArr = [
        ...todoData,
        newItem
      ];
      return { todoData: newArr };
      }); 
    };

    function toggleProperty(arr, id, propName){
      const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
       return  [ 
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)];
    }

    this.onToggleImportant =(id) => {
      this.setState(({todoData}) =>{
          return { todoData: toggleProperty(todoData, id, 'important') };
        });
    };
  
    this.onToggleDone =(id) => {
      this.setState(({todoData}) =>{
        return { todoData: toggleProperty(todoData, id, 'done') };
        });
    };

   this.search= (items, term) => {
    if(term.length === 0){
      return items;
    }
    return items.filter((item)=> item.label.toLowerCase()
    .indexOf(term.toLowerCase()) > -1);
  };
this.onSearchLabel= (text)=>{
this.setState(()=>{
    return {term: text};
});
};

  }

  render() {
    const { todoData, term } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleItem = this.search(todoData, term);
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel
          onSearchLabel={this.onSearchLabel} />
          <ItemStatusFilter />
        </div>

        <TodoList 
        todos={visibleItem}
          onDeleted={this.del} 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
          <AddedListItem
          onAddedItem={this.addItemList}/>
      </div>
    );
  }

}
