import React from "react";
import styles from "./Home.module.css";
import BatchCookingList from "../BatchCookingList/BatchCookingList";
import ShoppingList from "../ShoppingList/ShoppingList";

function Home() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.sectionContainer}>
                <div className={`${styles.washi} ${styles.dots}`}>Things to buy...</div>
                <ShoppingList />
            </div>

            <div className={styles.sectionContainer}>
                <div className={`${styles.washi} ${styles.plaid}`}>This week's recipes...</div>
                <BatchCookingList />
            </div>
        </div>
    )
}

export default Home;