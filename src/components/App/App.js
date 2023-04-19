import "./App.css";
import Header from "../Header";
import SearchBar from "../SearchBar";
import List from "../List";
import AddBar from "../AddBar";
import { Component } from "react";
import ActiveButton from "../ActiveButton";

export default class App extends Component {
  idCount = 0;

  addTask = (text) => {
    return {
      text,
      important: false,
      done: false,
      id: this.idCount++,
    };
  };

  state = {
    toDoData: [
      this.addTask("Drink Coffee"),
      this.addTask("Slaaay!"),
      this.addTask("Hunty"),
      this.addTask("Diva"),
    ],
    term: "",
    filter: "all",
  };

  addItem = (text) => {
    this.setState(({ toDoData }) => {
      const newArr = toDoData.concat(this.addTask(text));
      return {
        toDoData: newArr,
      };
    });
  };

  removeItem = (id) => {
    this.setState(({ toDoData }) => {
      const newArr = toDoData.filter((el) => el.id !== id);
      return {
        toDoData: newArr,
      };
    });
  };

  handleImportant = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.changeProperty(toDoData, id, "important"),
      };
    });
  };

  handleDone = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.changeProperty(toDoData, id, "done"),
      };
    });
  };

  serchItem() {}

  changeProperty = (arr, id, propName) => {
    const index = arr.findIndex((el) => el.id === id);

    const oldObj = arr[index];
    const newObj = { ...oldObj, [propName]: !oldObj[propName] };

    const newArr = [...arr.slice(0, index), newObj, ...arr.slice(index + 1)];

    return newArr;
  };

  search(items, string) {
    if (string === "") {
      return items;
    }
    return items.filter((el) => {
      return el.text.toLowerCase().indexOf(string.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((el) => !el.done);
      case "done":
        return items.filter((el) => el.done);
      default:
        return items;
    }
  }

  handleOnSearch = (term) => {
    this.setState({ term });
  };

  handleOnFilter = (filter) => {
    this.setState({ filter });
  };

  render = () => {
    const { toDoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(toDoData, term), filter);

    const doneCount = toDoData.filter((el) => el.done).length;
    const moreCount = toDoData.length - doneCount;

    return (
      <div className="app">
        <Header more={moreCount} done={doneCount} />
        <div className="button-search">
          <SearchBar handleOnSearch={this.handleOnSearch} />
          <ActiveButton
            buttons={this.state.buttons}
            filter={filter}
            handleOnFilter={this.handleOnFilter}
          />
        </div>
        <List
          todos={visibleItems}
          handleImportant={this.handleImportant}
          handleDelete={this.removeItem}
          handleDone={this.handleDone}
        />
        <AddBar addItem={this.addItem} />
      </div>
    );
  };
}
