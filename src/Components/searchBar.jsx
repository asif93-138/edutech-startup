import classes from "../styles/searchBar.module.css";

export default function SearchBar() {
  return (
    <div>
      <div className={classes.searchBar}>
        <input
          type="text"
          className={classes.searchInput}
          placeholder="Serach..."
        />
        <button className={classes.searchButton}>Search</button>
      </div>
    </div>
  );
}
