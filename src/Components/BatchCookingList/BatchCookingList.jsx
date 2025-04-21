import React, { useContext, useState } from "react";
import RecipeContext from "../../Context/RecipeContext";
import RecipeTile from "../RecipeTile/RecipeTile";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./BatchCookingList.module.css"

function BatchCookingList() {
    const { selectedRecipes, removeRecipe } = useContext(RecipeContext);
    const [recipeCard, setRecipeCard] = useState(null);

    const handleClick = index => {
        removeRecipe(index);
    }

    const handleTitleClick = recipe => {
        setRecipeCard(recipe);
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
                                onTitleClicked={() => handleTitleClick(recipe)}
                            />
                        )}
                    </div>)}
            </div>
            <RecipeCard recipe={recipeCard} onClose={() => setRecipeCard(null)}/>
        </div>
    )
}

export default BatchCookingList;