### This is my mini-project Todo List <h2>
        
This project is written in ReactJS, where you can manage your to do List.
You can also mark important tasks as well as filter and search for  to do. 

The **app.js** file returns simple tags and custom tags in <div id=root>.
  All these tags are written in the rest of the components, 
  they also transmit custom events 

```javascript
return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel
            onSearchLabel={this.onSearchLabel} />
          <ItemStatusFilter
            onFilterStatus={this.onFilterStatus}
            filterBtn={filter} />
        </div>

        <TodoList
          todos={visibleItem}
          onDeleted={this.del}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <AddedListItem
          onAddedItem={this.addItemList} />
      </div>
    );
```

the **createTodoItem** function creates todo items for us
and then we put them in an array 

```javascript
 todoData: [
        createTodoItem('Drink Coffee'),
        createTodoItem('Make Awesome App'),
        createTodoItem('Start Awesome App'),
        createTodoItem('Have a lunch'),
      ],
      term: "",
      filter: "all"
    };

    function createTodoItem(label) {
      return ({
        label,
        done: false,
        important: false,
        id: maxId++
      });
    }
    }
```

the todo-list component is responsible for our list, 
it has a custom tag that is responsible for items 

Also when adding a new item via Add button or deleting it via trash,
a new array is created which is written to our object via returne,
not via push and delete, because our object is stored in state,
because changing it to a direct one is a gross error.
example

```javascript
  const newItem = createTodoItem(text);
      this.setState(({ todoData }) => {
        const newArr = [
          ...todoData,
          newItem
        ];
        return { todoData: newArr };
      });
```

Filter and search were implemented via switch and simple comparison 
of **indexOf** text and if the index was greater than -1. Then a new array
is created through the filter, which is written to the visible array  


when we change the status from done to unfinished or important to unimportant.
This starts a function that returns us a new array with the modified element,
on the same principle as if we are adding or removing the element  

```javascript
 function toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };
      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)];
    }

    this.onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return { todoData: toggleProperty(todoData, id, 'important') };
      });
    };

    this.onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        return { todoData: toggleProperty(todoData, id, 'done') };
      });
    };
```



