import { createContext, useState } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipes, setSelectedRecipes] = useState([]);

    const addRecipe = (title, ingredients) => {
        setRecipes([...recipes, {title, ingredients}])
    }

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe }}>
          {children}
        </RecipeContext.Provider>
      );
      
}

export default RecipeContext;