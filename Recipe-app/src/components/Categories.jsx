import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styles from "../styles/Categories.module.css";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div className={styles.list}>
      <NavLink to={"/Cuisine/Italian"}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        <FaPizzaSlice />
        <h4>Italian </h4>
      </NavLink>
      <NavLink to={"/Cuisine/American"}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        <FaHamburger />
        <h4>American </h4>
      </NavLink>
      <NavLink to={"/Cuisine/Thai"}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/Cuisine/Japanese"}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
}

export default Categories;
