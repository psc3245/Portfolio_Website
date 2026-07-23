import styles from "../Style/Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <span className={styles.footerName}>Peter Collins</span>
          <span className={styles.footerRole}>Software Engineer</span>
        </div>

        <nav className={styles.footerLinks}>
          <a href="#welcome">Welcome</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.footerSocial}>
          <a href="mailto:psc3.omaha@gmail.com">Email</a>
          <a
            href="https://linkedin.com/in/psc3245"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/psc3245"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {year} Peter Collins. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
