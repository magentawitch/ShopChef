import React, { useState, useContext } from "react";
import RecipeContext from "../../Context/RecipeContext";
import Ingredient from "../Ingredient/Ingredient";
import styles from "./RecipeForm.module.css";

function RecipeForm() {
    const { addRecipe, addIngredient, ingredientsList } = useContext(RecipeContext);
    const [title, setTitle] = useState("");

    const [ingredientInput, setIngredientInput] = useState("");
    const [error, setError] = useState("");

    const [instructions, setInstructions] = useState(""); 

    const normalizeUnit = (unit) => {
        const map = {
            tablespoon: "tbsp",
            tablespoons: "tbsp",
            tbsp: "tbsp",
            teaspoon: "tsp",
            teaspoons: "tsp",
            tsp: "tsp",
            cup: "cups",
            cups: "cups",
            unit: "u.",
            units: "u.",
            gr: "gr",
            grs: "gr",
            gram: "gr",
            grams: "gr",
            kg: "kg",
            kgs: "kg",
            kilogram: "kg",
            kilograms: "kg",
            l: "l",
            ls: "l",
            liter: "l",
            liters: "l",
            ml: "ml",
            mls: "ml",
            milliliter: "ml",
            milliliters: "ml",
        };
        const normalized = unit?.toLowerCase().trim();
        return map[normalized] || normalized;
    };


    const parseIngredient = (input) => {
        const regex = /^(\d+(?:[.,]\d+)?)(?:\s+(\w+))?(?:\s+of)?\s+(.*)$/i;
        const match = input.match(regex);
        if (match) {
            const [, amount, unitRaw = "unit", name] = match;
            const unit = normalizeUnit(unitRaw);
            return { amount, unit, name: name.toLowerCase() };
        }
        return null;
    };

    const handleSubmitIngredient = (event) => {
        if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")) {
            event.preventDefault();
            const parsed = parseIngredient(ingredientInput);
            if (parsed) {
                addIngredient(parsed);
                setIngredientInput("");
                setError("");
            } else {
                setError("Please write the ingredient using the format 'Amount Unit Ingredient'");
            }
        }
    };

    const handleClick = () => {
        addRecipe(title, ingredientsList, instructions);
        setTitle("");
        setInstructions("");
    }


    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input className={styles.input} type="text" placeholder="Recipe Name" value={title} onChange={({ target }) => setTitle(target.value)} />
            <div className={styles.ingredient}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="e.g. 1 units tomato"
                    value={ingredientInput}
                    onChange={({ target }) => setIngredientInput(target.value)}
                    onKeyDown={handleSubmitIngredient}
                />
                <button className={styles.addButton} onClick={handleSubmitIngredient}>+</button>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.ingredientsContainer}>
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