import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

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
    this.setState(
      {
        list: [...this.state.list, this.state.item],
        item: ""
      }
    );

    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>
          To Do List
        </h1>
        <form>
          <label>Enter Your To Do Item: </label>
          <input value={this.state.item} onChange={this.itemChange} />
          <button onClick={this.addItem}>Add Item</button>
        </form>
        <div>
          <List list={this.state.list}/>
          </div>
      </div>
    );
  }
}

export default App;
