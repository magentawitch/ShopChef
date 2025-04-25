import React from "react";
import styles from "./RecipeCard.module.css";

function RecipeCard({ recipe, onClose, deleteButton, onDelete }) {
    if (!recipe) return null;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.recipeCardContainer}>
                <div className={recipe}>
                    <div className={styles.recipeHeader}>
                        <h3 className={styles.title}>{recipe.title}</h3>
                        <button className={styles.closeButton} onClick={onClose}>x</button>
                    </div>
                    <ul>
                        {recipe.ingredients.map((ingredient, i) => (
                            <li key={i} className={styles.ingredient}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                        ))}
                    </ul>
                    <p className={styles.instructions}>{recipe.instructions}</p>
                </div>
                {deleteButton &&
                    <button className={styles.deleteButton} onClick={onDelete}>Delete</button>
                }
            </div>
        </div>
    )
}

export default RecipeCard;