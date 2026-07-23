import styles from "../Style/Header.module.css";

function Header() {
  return (
    <div className={styles.row}>
      <div className={styles.navLinks}>
        <a href="#welcome" className={styles.btn}>
          Welcome
        </a>
        <a href="#projects" className={styles.btn}>
          Projects
        </a>
        <a href="#experience" className={styles.btn}>
          Experience
        </a>
        <a href="#skills" className={styles.btn}>
          Skills
        </a>
        <a href="#contact" className={styles.btn}>
          Contact
        </a>
      </div>

      <a
        href="/Peter-Collins-Resume.pdf"
        download="Peter-Collins-Resume.pdf"
        className={styles.resumeButton}
      >
        Resume
      </a>
    </div>
  );
}

export default Header;
