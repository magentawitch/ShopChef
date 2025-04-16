import React, { useState, useContext } from "react";
import RecipeContext from "../../Context/RecipeContext";
import RecipeTile from "../RecipeTile/RecipeTile";
import styles from "./RecipeList.module.css";

function RecipeList() {
    const { recipes, selectRecipe } = useContext(RecipeContext);
    const [clickedIndex, setClickedIndex] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);


    const handleClick = index => {
        selectRecipe(index);
        setClickedIndex(index);
        setIsDisabled(true);
        setTimeout(() => {
            setClickedIndex(null);
            setIsDisabled(false);
        }, 1000)
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
                    />
                )}
            </div>
        </div>
    )
}

export default RecipeList;