import "./ListItem.css";

const ListItem = ({
  text,
  important,
  done,
  handleImportant,
  handleDelete,
  handleDone,
}) => {
  const style = {
    color: important ? "tomato" : "black",
    textDecoration: done ? "line-through" : "none",
  };

  return (
    <>
      <span className="item-text" style={style} onClick={handleDone}>
        {text}
      </span>
      <div className="button-container">
        <button className="button button_important" onClick={handleImportant}>
          !
        </button>
        <button className="button button_delete" onClick={handleDelete}>
          Remove
        </button>
      </div>
    </>
  );
};

export default ListItem;
