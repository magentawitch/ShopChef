import React, { useState, useContext } from "react";
import RecipeContext from "../../Context/RecipeContext";
import RecipeTile from "../RecipeTile/RecipeTile";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./RecipeList.module.css";

function RecipeList() {
    const { recipes, selectRecipe, deleteRecipe } = useContext(RecipeContext);
    const [clickedIndex, setClickedIndex] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [recipeCard, setRecipeCard] = useState(null);
    const [recipeCardId, setRecipeCardId] = useState(null);


    const handleClick = index => {
        selectRecipe(index);
        setClickedIndex(index);
        setIsDisabled(true);
        setTimeout(() => {
            setClickedIndex(null);
            setIsDisabled(false);
        }, 1000)
    }

    const handleTitleClick = (recipe) => {
        setRecipeCard(recipe);
        setRecipeCardId(recipe.id);
    }

    const handleDelete = id => {
        deleteRecipe(id);
        setRecipeCard(null);
        setRecipeCardId(null);
    }

    return (
        <div className={styles.recipesContainer}>
            <div className={styles.recipe}>
                {recipes.map((recipe, i) =>
                    <RecipeTile
                        key={i}
                        icon={clickedIndex === i? "Added" : "+"}
                        title={recipe.title}
                        ingredients={recipe.ingredients}
                        isClicked={i === clickedIndex}
                        isDisabled={i === clickedIndex? isDisabled : false}
                        onClick={() => {handleClick(i)}}
                        onTitleClicked={() => handleTitleClick(recipe)}
                    />
                )}
            </div>
                <RecipeCard 
                recipe={recipeCard}
                deleteButton={true}
                onClose={() => {setRecipeCard(null); setRecipeCardId(null)}} 
                onDelete={() => {handleDelete(recipeCardId)}} />
        </div>
    )
}

export default RecipeList;