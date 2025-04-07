import React, { useContext } from "react";
import RecipeContext from "../../Context/RecipeContext";
import styles from "./Ingredient.module.css";

function Ingredient({ name, amount, unit, index }) {
    const { removeIngredient } = useContext(RecipeContext);
    const icon = "x";

    const handleClick = () => {
        removeIngredient(index);
    }

    return(
        <div className={styles.ingredientContainer}>
            <p className={styles.ingredient}>{amount} {unit} {name}</p>
            <button className={styles.removeButton} onClick={handleClick}>{icon}</button>
        </div>
    )
}

export default Ingredient;