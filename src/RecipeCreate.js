import React from "react";

function RecipeCreate({ createRecipe }) {
  //handleSubmit construction: when submitted
  const handleSubmit = (event) => {
    //prevent the default page refresh
    event.preventDefault()
    //start a new FormData construct
    const formData = new FormData(event.target)
    //declare an empty data object
    const data = {}
    //for each key value pair in the formData entries
    for (let [key, value] of formData.entries()) {
      //add it to the data object
      data[key] = value
    }
    //and run createRecipe in App.js
    createRecipe(data)
  }
  
  //structure for the form
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="body">
            <td>
              <input 
                name="name" 
                type="text"
                id="name"
                required={true}
                placeholder="Name"
              />
            </td>
            <td>
              <input 
                name="cuisine" 
                type="text"
                id="cuisine"
                required={true}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input 
                name="photo" 
                type="text"
                id="phone"
                placeholder="URL"
              />
            </td>
            <td>
              <textarea 
                name="ingredients" 
                type="text"
                id="ingredients"
                required={true}
                rows={2}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea 
                name="preparation"
                type="text"
                id="preparation"
                required={true}
                rows={2}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
