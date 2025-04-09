import React from "react";
import styles from "./RecipeTile.module.css";

function RecipeTile({ title, ingredients, icon, onClick }) {


    return (
        <div className={styles.tileContainer}>
            <div className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
            <button className={styles.addButton} onClick={onClick}>{icon}</button>
            </div>
            <div className={styles.ingredientsContainer}>
                {ingredients.map((ingredient, i) =>
                    <p key={i} className={styles.ingredient}>{ingredient}</p>
                )}
            </div>

        </div>
    )
}

export default RecipeTile;