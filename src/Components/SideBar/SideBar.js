import styles from "./SideBar.module.css";

export const SideBar = () => {
  return (
    <>
      <aside className={styles.sideBar}>
        <div className={styles.container}>
          <h1 className={styles.text}>Filter</h1>
          <h2 className={styles.price}>Price: 7000</h2>
          <input type="range" min={1} max={7000} step={10} />
          <div className={styles.category}>
            <span className={styles.text}>Category</span>
            <div className={styles.filter}>
              <input type="checkbox" id="men" />
              <label htmlFor="men" className={styles.filterText}>Men</label>
            </div>
            <div className={styles.filter}>
              <input type="checkbox" id="women" />
              <label htmlFor="women" className={styles.filterText}>Women</label>
            </div>
            <div className={styles.filter}>
              <input type="checkbox" id="jewellery" />
              <label htmlFor="jewellery" className={styles.filterText}>Jewellery</label>
            </div>
            <div className={styles.filter}>
              <input type="checkbox" id="shoes" />
              <label htmlFor="shoes"  className={styles.filterText}>Shoes</label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
