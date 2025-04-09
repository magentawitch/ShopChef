import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? styles.active : undefined}>
                        New Recipe
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recipes" 
                    className={({ isActive }) => isActive ? styles.active : undefined}>
                        My Recipes
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;