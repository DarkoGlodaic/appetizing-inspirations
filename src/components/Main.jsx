import { useState } from 'react';
import React from 'react';
import IngredientsList from '../components/IngredientsList'
import Recipe from '../components/Recipe.jsx'

export default function Main() {
    // State for our ingredient list
    const [ingredients, setIngredients] = useState([])
    const [recipeReceived, setRecipeReceived] = useState(false)

    const listIngredients = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
    
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        // Updates ingredient array with newIngredient
        setIngredients(prevIngredientList => [...prevIngredientList, newIngredient])
    }
    
    
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
            {ingredients.length > 0 ? <section className='ingredient-container'>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredient-list">{listIngredients}</ul>
                {ingredients.length > 3 ? <div  className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={receiveRecipe}>Get a recipe</button>
                </div> : null}
            </section> : null}
            <Recipe recipeReceived={recipeReceived}/>
        </main>
    )
}