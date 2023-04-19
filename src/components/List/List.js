import ListItem from "../ListItem";
import "./List.css";

const List = ({ todos, handleImportant, handleDelete, handleDone }) => {
  const items = todos.map((item) => {
    const { id, ...restItem } = item;

    return (
      <li key={id} className="list-item">
        <ListItem
          {...restItem}
          handleImportant={() => {
            handleImportant(id);
          }}
          handleDone={() => {
            handleDone(id);
          }}
          handleDelete={() => {
            handleDelete(id);
          }}
        />
      </li>
    );
  });

  return <ul className="todo-list">{items}</ul>;
};

export default List;
