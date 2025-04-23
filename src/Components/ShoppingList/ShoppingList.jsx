import React, { useContext, useState, useEffect } from "react";
import RecipeContext from "../../Context/RecipeContext";
import styles from "./ShoppingList.module.css";

function ShoppingList() {
    const { selectedRecipes } = useContext(RecipeContext);
    const [ingredientsToBuy, setIngredientsToBuy] = useState([]);

    useEffect(() => {
        updateShoppingList();
    }, [selectedRecipes])


    const updateShoppingList = () => {
        let updatedList = [];

        selectedRecipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                const existing = updatedList.find(item =>
                    item.name === ingredient.name && item.unit === ingredient.unit
                );

                if (existing) {
                    existing.amount += Number(ingredient.amount);
                } else {
                    updatedList.push({
                        name: ingredient.name,
                        unit: ingredient.unit,
                        amount: Number(ingredient.amount)
                    })
                }
            })
        })

        setIngredientsToBuy(updatedList);
    }


    return (
        <div className={styles.mainContainer} >
        <div className={styles.ingredientListContainer}>
            <div className={styles.ingredientItemContainer}>
                {ingredientsToBuy.length === 0 ? (
                    <p className={styles.emptyText}>Your shopping list is empty ✨</p>
                ) : (
                    <ul>
                        {ingredientsToBuy.map((ingredient, i) => (
                            <li key={i} className={styles.ingredient}>
                                <label className={styles.customCheckbox}>
                                    <input
                                        type="checkbox"
                                        className={styles.hiddenCheckbox}
                                    />
                                    <span className={styles.styledCheckbox}></span>
                                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                                </label>
                            </li>
                        ))}
                    </ul>)}
            </div>
        </div>
        </div>
    )
}

export default ShoppingList;

