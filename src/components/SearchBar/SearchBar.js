import { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  state = {
    term: "",
  };

  handleInput = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.handleOnSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        onChange={this.handleInput}
        value={this.state.term}
      />
    );
  }
}
