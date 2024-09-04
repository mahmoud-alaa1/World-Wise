import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  console.log(styles)
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={"/"}>Home Page</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
