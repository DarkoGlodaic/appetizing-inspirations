import { useState, useRef, useEffect } from 'react';
import IngredientsList from '../components/IngredientsList'
import Recipe from '../components/Recipe.jsx'
import { getRecipeFromClaude } from '../ai.js';

export default function Main() {
    // State for our ingredient list
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState(false)
    const [loading, setLoading] = useState(false)

    // Used for scrolling to recipe container after being received from API
    const recipeRef = useRef(null)

    // Handles adding ingredients to ingredient list
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        // Updates ingredient array with newIngredient
        setIngredients(prevIngredientList => [...prevIngredientList, newIngredient])
    }

    // Handles removing ingredients from ingredient list
    const removeIngredient = (index) => {
        setIngredients((prevIngredientList => prevIngredientList.filter((_, i) => i !== index)))
    }
    
    // Gets called by Ingredient list when "Get a recipe" is clicked
    const getRecipe = async () => {
        setLoading(true) // Set loading to true before starting the API call
        const recipeMarkdown = await getRecipeFromClaude(ingredients)
        setRecipe(recipeMarkdown) // Update receivedRecipe with the fetched recipe
        setLoading(false)
    }

    // Use effect to scroll to the recipe once it's set
    useEffect(() => {
        if (recipe && recipeRef.current) {
        // This ensures scroll only happens after the new element is rendered
        recipeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe]); // This effect runs every time receivedRecipe changes

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

            <IngredientsList 
                ingredients={ingredients}
                getRecipe={getRecipe}
                loading={loading}
                removeIngredient={removeIngredient}    
            />
            {recipe && <div ref={recipeRef}><Recipe recipeRef={recipeRef} recipe={recipe}/></div>}
        </main>
    )
}