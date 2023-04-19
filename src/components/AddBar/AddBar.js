import { Component } from "react";
import "./AddBar.css";

export default class AddBar extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState(({ text }) => {
      return {
        text: e.target.value,
      };
    });
  };

  clearInput = () => {
    this.setState(({ text }) => {
      return {
        text: "",
      };
    });
  };

  render() {
    const { addItem } = this.props;
    const { text } = this.state;

    return (
      <form
        className="add-container"
        onSubmit={(e) => {
          e.preventDefault();
          addItem(text);
          this.clearInput();
        }}
      >
        <input
          className="add-input"
          onChange={this.handleChange}
          value={text}
        />
        <button className="button add-button">Add Item</button>
      </form>
    );
  }
}
