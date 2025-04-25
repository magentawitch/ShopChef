import { createContext, useState, useEffect } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState(() => {
        const storedRecipes = localStorage.getItem("recipes");
        return storedRecipes ? JSON.parse(storedRecipes) : [];
    });
    
    const [selectedRecipes, setSelectedRecipes] = useState(() => {
        const storedSelectedRecipes = localStorage.getItem("selectedRecipes");
        return storedSelectedRecipes ? JSON.parse(storedSelectedRecipes) : [];
    });
    
    const [ingredientsList, setIngredientsList] = useState([]);

    useEffect(() => {
        localStorage.setItem("selectedRecipes", JSON.stringify(selectedRecipes));
    }, [selectedRecipes])

    useEffect(() => {
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }, [recipes]);

    const addRecipe = (title, ingredients, instructions) => {
        const uniqueId = self.crypto.randomUUID();
        setRecipes((prev) => [...prev, { id: uniqueId, title: title, ingredients: ingredients, instructions: instructions }]);
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

    const deleteRecipe = idToRemove => {
        setRecipes((prev) => prev.filter((recipe) => recipe.id !== idToRemove));
        setSelectedRecipes((prev) => prev.filter((recipe) => recipe.id !== idToRemove));
    }

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe, ingredientsList, addIngredient, removeIngredient, selectedRecipes, selectRecipe, removeRecipe, deleteRecipe }}>
            {children}
        </RecipeContext.Provider>
    );

}

export default RecipeContext;