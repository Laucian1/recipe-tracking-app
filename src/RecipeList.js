import React from "react";
import RecipeView from "./RecipeView"

function RecipeList({ recipes, deleteRecipe }) {
  //structure for the recipe table
  return (
    <div className="recipe-list">
      <table>
        <thead className="head">
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="body">
          {recipes.map((recipe, index) => (
            <RecipeView
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
