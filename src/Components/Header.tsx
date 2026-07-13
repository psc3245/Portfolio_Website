import styles from "../Style/Header.module.css";

function Header() {
  return (
    <div className={styles.row}>
      <a href="#welcome" className={styles.btn}>
        Welcome
      </a>
      <a href="#about" className={styles.btn}>
        About Me
      </a>
      <a href="#projects" className={styles.btn}>
        Projects
      </a>
      <a href="#contact" className={styles.btn}>
        Contact
      </a>
    </div>
  );
}

export default Header;
