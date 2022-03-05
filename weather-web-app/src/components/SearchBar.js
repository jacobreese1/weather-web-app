import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Search Zip/City/State" className={styles.searchBar} />
      <svg xmlns="../images/svg/magnifying-glass.svg" fill="none" className={styles.searchBarSVG}></svg>
    </div>
  );
};

export default SearchBar;
