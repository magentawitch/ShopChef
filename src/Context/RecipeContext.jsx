import { createContext, useState } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipes, setSelectedRecipes] = useState([]);
    const [ingredientsList, setIngredientsList] = useState([]);


    const addRecipe = (title, ingredients, instructions) => {
        setRecipes((prev) => [...prev, { title: title, ingredients: ingredients, instructions: instructions }]);
        setIngredientsList([]);
    }

    const addIngredient = (ingredient) => {
        setIngredientsList((prev) => [...prev, ingredient]);
    }

    const removeIngredient = (indexToRemove) => {
        setIngredientsList((prev) => prev.filter((_, i) => i !== indexToRemove));
    };

    const selectRecipe = recipeIndex => {
        setSelectedRecipes((prev) => [...prev, recipes[recipeIndex]])
        console.log(selectedRecipes);
    }

    const removeRecipe = indexToRemove => {
        setSelectedRecipes((prev) => prev.filter((_, i) => i !== indexToRemove));
    }

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe, ingredientsList, addIngredient, removeIngredient, selectedRecipes, selectRecipe, removeRecipe }}>
            {children}
        </RecipeContext.Provider>
    );

}

export default RecipeContext;