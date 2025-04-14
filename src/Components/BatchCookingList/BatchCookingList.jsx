import React, { useContext } from "react";
import RecipeContext from "../../Context/RecipeContext";
import RecipeTile from "../RecipeTile/RecipeTile";
import styles from "./BatchCookingList.module.css"

function BatchCookingList() {
    const { selectedRecipes, removeRecipe } = useContext(RecipeContext);

    const handleClick = index => {
        removeRecipe(index);
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.recipesContainer}>
                {selectedRecipes.length === 0 ? (
                    <p className={styles.emptyText}>No batch cooking recipes selected 🌱</p>
                ) : (
                    <div className={styles.recipe}>
                        {selectedRecipes.map((recipe, i) =>
                            <RecipeTile
                                key={i}
                                icon="–"
                                title={recipe.title}
                                ingredients={recipe.ingredients}
                                onClick={() => handleClick(i)}
                            />
                        )}
                    </div>)}
            </div>
        </div>
    )
}

export default BatchCookingList;