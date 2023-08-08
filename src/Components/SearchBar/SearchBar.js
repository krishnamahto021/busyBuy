import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search By Name"
        />
      </div>
    </>
  );
};
