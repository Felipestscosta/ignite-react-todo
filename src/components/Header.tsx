import styles from "./Header.module.css";
import Logo from "../assets/logo-todo.svg";

export function Header() {
  return (
    <header className={styles.secao}>
      <img src={Logo} />
    </header>
  );
}
