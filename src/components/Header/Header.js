import "./Header.css";

const Header = ({ more, done }) => {
  return (
    <div className="header-container">
      <h3 className="header">ToDo List</h3>
      <span className="info">
        {more} more to do, {done} done
      </span>
    </div>
  );
};

export default Header;
