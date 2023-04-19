import { Component } from "react";
import "./ActiveButton.css";

export default class ActiveButton extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { filter, handleOnFilter } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive
        ? "search-button search-button_active"
        : "search-button";
      return (
        <button
          key={name}
          className={`button ${clazz}`}
          onClick={() => {
            handleOnFilter(name);
          }}
        >
          {label}
        </button>
      );
    });

    return <div className="search-buttons-container">{buttons}</div>;
  }
}
