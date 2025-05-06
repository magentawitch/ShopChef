import React, { useContext, useState, useEffect } from "react";
import RecipeContext from "../../Context/RecipeContext";
import styles from "./ShoppingList.module.css";

function ShoppingList() {
    const { selectedRecipes } = useContext(RecipeContext);
    const [ingredientsToBuy, setIngredientsToBuy] = useState([]);
    const [checkedItems, setCheckedItems] = useState(() => {
        const storedCheckedItems = localStorage.getItem("checkedItems");
        return storedCheckedItems ? JSON.parse(storedCheckedItems) : {};
    });

    useEffect(() => {
        localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
    }, [checkedItems]);

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
            
        });

        setIngredientsToBuy(updatedList);

        setCheckedItems(prevChecked => {
            const newChecked = {};
            updatedList.forEach(ingredient => {
                const key = getIngredientKey(ingredient);
                newChecked[key] = prevChecked[key] || false;
            });
            return newChecked;
        });

    };

    const getIngredientKey = (ingredient) => {
        return `${ingredient.name}-${ingredient.unit}`;
    }

    const handleCheckboxChange = (ingredient) => {
        const key = getIngredientKey(ingredient);
        setCheckedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };


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
                                            checked={checkedItems[getIngredientKey(ingredient)] || false}
                                            onChange={() => handleCheckboxChange(ingredient)}
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

