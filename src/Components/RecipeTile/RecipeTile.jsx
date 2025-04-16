import React from "react";
import styles from "./RecipeTile.module.css";

function RecipeTile({ title, ingredients, icon, onClick, isClicked, isDisabled }) {


    return (
        <div className={styles.tileContainer}>
            <div className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
            <button className={`${styles.addButton} ${isClicked ? styles.clicked : ""}`} onClick={onClick} disabled={isDisabled} >{icon}</button>
            </div>
            <div className={styles.ingredientsContainer}>
                {ingredients.map((ingredient, i) =>
                    <p key={i} className={styles.ingredient}>{ingredient.name}</p>
                )}
            </div>

        </div>
    )
}

export default RecipeTile;