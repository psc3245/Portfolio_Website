import styles from "../Style/Header.module.css";
import xIcon from "../Assets/x-button-icon.png";
import hamburgerIcon from "../Assets/hamburger-menu-icon.png";

interface HeaderProps {
  menuExpanded: boolean;
  setMenuExpanded: (val: boolean) => void;
}

function Header({ menuExpanded, setMenuExpanded }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.menu}>
          <div className={styles.menuButton}>
            <button onClick={() => setMenuExpanded(!menuExpanded)}>
              {menuExpanded ? (
                <div><img src={xIcon} alt="x" /></div>
              ) : (
                <div><img src={hamburgerIcon} alt="hamburger" /></div>
              )}
            </button>
          </div>

          {menuExpanded && (
            <div className={styles.dropdownMenu}>
              <div className={styles.menuItem}>
                <button>Home</button>
              </div>
              <div className={styles.menuItem}>
                <button>Background</button>
              </div>
              <div className={styles.menuItem}>
                <button>Projects</button>
              </div>
              <div className={styles.menuItem}>
                <button>Contact</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.logo}>{/* Logo goes here */}</div>

      <div className={styles.rightSection}>
        <input
          type="text"
          id="search"
          className={styles.searchInput}
          placeholder="Search..."
        />
        <div className={styles.searchIcon}>{/* Search icon */}</div>
      </div>
    </header>
  );
}

export default Header;
