import React from "react";
import { useState, useContext, useEffect } from "react";
import RecipeContext from "../../Context/RecipeContext";
import Ingredient from "../Ingredient/Ingredient";
import styles from "./RecipeForm.module.css";

function RecipeForm() {
    const { addRecipe, addIngredient, ingredientsList } = useContext(RecipeContext);
    const [title, setTitle] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [instructions, setInstructions] = useState("");

    useEffect(() => {
        console.log("Updated list:", ingredientsList);
      }, [ingredientsList]);

    const handleKeyDown = event => {
        if (event.key === "Enter") {
            event.preventDefault()
            if (ingredient.trim() !== "")
            addIngredient(ingredient);
            console.log(`This is the ingredient List: ${ingredientsList}`);
            setIngredient("");
        }
    }

    const handleClick = () => {
        addRecipe(title, ingredientsList, instructions);
        setTitle("");
        setInstructions("");
    }


    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input className={styles.input} type="text" placeholder="Recipe Name" value={title} onChange={({target}) => setTitle(target.value)} />
            <input className={styles.input} type="text" placeholder="Ingredients" value={ingredient} onChange={({target}) => setIngredient(target.value)} onKeyDown={handleKeyDown} />
            <div>
            {ingredientsList.map((ingredient, i) => 
                <Ingredient 
                key={i} 
                index={i}
                name={ingredient} 
                />
            )}
            </div>
            <textarea className={styles.textArea} placeholder="Instructions" value={instructions} onChange={({target}) => setInstructions(target.value)} />
            <button className={styles.submitButton} type="submit" onClick={handleClick} >Add Recipe</button>
        </form>
    )
}

export default RecipeForm;