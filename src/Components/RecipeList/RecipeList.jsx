import React, { useContext } from "react";
import RecipeContext from "../../Context/RecipeContext";
import RecipeTile from "../RecipeTile/RecipeTile";
import styles from "./RecipeList.module.css";

function RecipeList() {
    const { recipes, selectRecipe } = useContext(RecipeContext);

    const handleClick = index => {
        selectRecipe(index);
    }

    return (
        <div className={styles.recipesContainer}>
            <div className={styles.recipe}>
                {recipes.map((recipe, i) =>
                    <RecipeTile
                        key={i}
                        icon="+"
                        title={recipe.title}
                        ingredients={recipe.ingredients}
                        onClick={() =>{handleClick(i)}}
                    />
                )}
            </div>
        </div>
    )
}

export default RecipeList;