import React from "react";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.imgLogo} src="/logo light.svg" />
            </div>
        </div>
    )
}

export default Header;