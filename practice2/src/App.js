import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faListAlt  } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle);
library.add(faCircle);
library.add(faTimes);
library.add(faListAlt);




class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    }
  }

  itemChange = (e) => {
    this.setState({item: e.target.value})
  }

  addItem = (e) => {
    var newItem = {
      todo: this.state.item,
      done: false
    };

    this.setState(
      {
        list: [...this.state.list, newItem],
        item: ""
      }
    );

    e.preventDefault();
  }

  checkItem = (index) => {
      const newList = this.state.list.slice();
      newList[index].done = !newList[index].done;
      this.setState(
        {
         list: newList 
        }
      );
  }


  deleteItem = (index) => {
    const newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState(
      {
        list: newList
      }
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FontAwesomeIcon icon={["far", "list-alt"]} size="5x" color="lightskyblue"/>
          <h1>To Do List</h1>
        </header>
        <div id='div-list'>
        <h2>
          Manage Your List
        </h2>
        <form>
          <label id="todo-label">To Do Item: </label>
          <input value={this.state.item} onChange={this.itemChange} />
          <button id='add-button' onClick={this.addItem}>Add Item</button>
        </form>
        <div>
          <List list={this.state.list} done={this.checkItem} delete={this.deleteItem}/>
          </div>

       </div>
      </div>
    );
  }
}

export default App;
