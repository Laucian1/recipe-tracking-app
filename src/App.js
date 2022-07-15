import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  //set a state for the recipes, using RecipeData.js as default
  const [recipes, setRecipes] = useState(RecipeData);

  //set a createRecipe function that takes a new recipe
  const createRecipe = (newRecipe) => {
    //and appends it to the recipes state
    setRecipes([...recipes, newRecipe])
  }

  //set a deleteRecipe function that takes a chosen index
  const deleteRecipe = (indexToDelete) =>
    //compares it to the current recipes in the state
    setRecipes((currentRecipes) => 
      //and filters out the recipes that do not match the index
      currentRecipes.filter((recipe, index) => 
        index !== indexToDelete)
    )
  
  //structure for the page
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate 
        recipes={recipes}
        createRecipe={createRecipe}
      />
    </div>
  );
}

export default App;
