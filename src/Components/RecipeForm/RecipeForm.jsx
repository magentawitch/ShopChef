import React, { useState, useContext } from "react";
import RecipeContext from "../../Context/RecipeContext";
import Ingredient from "../Ingredient/Ingredient";
import styles from "./RecipeForm.module.css";

function RecipeForm() {
    const { addRecipe, addIngredient, ingredientsList } = useContext(RecipeContext);
    const [title, setTitle] = useState("");

    const [ingredientName, setIngredientName] = useState("");
    const [ingredientAmount, setIngredientAmount] = useState("");
    const [ingredientUnit, setIngredientUnit] = useState("");

    const [instructions, setInstructions] = useState(""); 

    const handleKeyDown = event => {
        if (event.key === "Enter") {
            event.preventDefault()
            if (ingredientName.trim() !== "" && ingredientAmount.trim() !== "")
                addIngredient({ name: ingredientName, amount: ingredientAmount, unit: ingredientUnit });
            setIngredientName("");
            setIngredientAmount("");
            setIngredientUnit("");
        }
    }

    const handleClick = () => {
        addRecipe(title, ingredientsList, instructions);
        setTitle("");
        setInstructions("");
    }


    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input className={styles.input} type="text" placeholder="Recipe Name" value={title} onChange={({ target }) => setTitle(target.value)} />
            <div className={styles.ingredient}>
                <input className={styles.inputNumber} type="text" placeholder="2" value={ingredientAmount} onChange={({ target }) => setIngredientAmount(target.value)} />
                <select className={styles.inputSelect} value={ingredientUnit} onChange={({ target }) => setIngredientUnit(target.value)} required >
                    <option value="" disabled selected hidden>Choose</option>
                    <option value="units">Units</option>
                    <option value="cups">Cups</option>
                    <option value="tsp">Tsp</option>
                    <option value="tbsp">Tbsp</option>
                    <option value="gr">Gr</option>
                    <option value="Kg">Kg</option>
                </select>
                <input className={styles.input} type="text" placeholder="Ingredients" value={ingredientName} onChange={({ target }) => setIngredientName(target.value)} onKeyDown={handleKeyDown} />
            </div>

            <div>
                {ingredientsList.map((ingredient, i) =>
                    <Ingredient
                        key={i}
                        index={i}
                        name={ingredient.name}
                        amount={ingredient.amount}
                        unit={ingredient.unit}
                    />
                )}
            </div>
            <textarea className={styles.textArea} placeholder="Instructions" value={instructions} onChange={({ target }) => setInstructions(target.value)} />
            <button className={styles.submitButton} type="submit" onClick={handleClick} >Add Recipe</button>
        </form>
    )
}

export default RecipeForm;