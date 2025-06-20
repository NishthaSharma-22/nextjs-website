import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlinks}>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">projects</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
}
