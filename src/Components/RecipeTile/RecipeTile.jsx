import React from "react";
import styles from "./RecipeTile.module.css";

function RecipeTile({ title, ingredients }) {


    return (
        <div className={styles.tileContainer}>
            <div className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={styles.ingredientsContainer}>
                {ingredients.map((ingredient) =>
                    <p className={styles.ingredient}>{ingredient}</p>
                )}
            </div>

        </div>
    )
}

export default RecipeTile;