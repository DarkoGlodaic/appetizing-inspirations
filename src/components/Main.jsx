import { useState } from 'react';
import IngredientsList from '../components/IngredientsList'
import Recipe from '../components/Recipe.jsx'

export default function Main() {
    // State for our ingredient list
    const [ingredients, setIngredients] = useState(["eggs", "tomatoes", "cucumber"])
    const [recipeReceived, setRecipeReceived] = useState(false)

    // Handles adding ingredients to ingredient list
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        // Updates ingredient array with newIngredient
        setIngredients(prevIngredientList => [...prevIngredientList, newIngredient])
    }
    
    // Gets called by Ingredient list when "Get a recipe" is clicked
    function receiveRecipe() {
        setRecipeReceived(prevReceived => !prevReceived)
    }

    return (
        <main>
            <form 
            className="ingredient-form"
            action={addIngredient}
            >
                <input
                    aria-label="Add ingredient"
                    className="input-text"
                    type="text"
                    placeholder="eg. tomato"        
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            <IngredientsList ingredients={ingredients} receiveRecipe={receiveRecipe}/>
            {recipeShown && <Recipe recipeReceived/>}
        </main>
    )
}