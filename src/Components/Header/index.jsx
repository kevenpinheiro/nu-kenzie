import logo from "../../assets/Nu Kenzie.svg";
import styles from "./style.module.scss";
export const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
};
