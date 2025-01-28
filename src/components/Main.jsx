import { useState } from 'react';

export default function Main() {

    // State for our ingredient list
    const [ingredients, setIngredients] = useState([])

    const listIngredients = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        // Disables form submit refreshing the page
        event.preventDefault()
        // Gets ingredient entered in form
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        // Updates ingredient array with newIngredient
        setIngredients(prevIngredientList => [...prevIngredientList, newIngredient])
        console.log(ingredients)
    }
    
    return (
        <main>
            <form 
            className="ingredient-form"
            onSubmit={handleSubmit}
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
            <ul>
                {listIngredients}
            </ul>
        </main>
    )
}