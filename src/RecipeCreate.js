import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [formData, setFormData] = useState({ ...initialFormState })
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe(formData)
    setFormData({ ...initialFormState })
    console.log(formData.photo)
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                name="name" 
                type="text"
                id="name"
                onChange={handleChange}
                value={formData.name}
                required={true}
                placeholder="Name"
              />
            </td>
            <td>
              <input 
                name="cuisine" 
                type="text"
                id="cuisine"
                onChange={handleChange}
                value={formData.cuisine}  
                required={true}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input 
                name="photo" 
                type="text"
                id="phone"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea 
                name="ingredients" 
                type="text"
                id="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
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
                onChange={handleChange}
                value={formData.preparation}
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
