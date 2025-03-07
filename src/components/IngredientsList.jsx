export default function IngredientList(props) {

    const listIngredients = props.ingredients.map((ingredient, index) => (
        <li 
            key={ingredient}
            onClick={() => props.removeIngredient(index)} // Click handler to remove ingredient
        >
            {ingredient}
        </li>    
    ))

    function alreadyLoading() {
        alert("Already fetching recipe. Please wait")
    }

    return props.ingredients.length > 0 ? <section className='ingredient-container'>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredient-list">{listIngredients}</ul>
        {props.ingredients.length > 3 ? <div  className="get-recipe-container">
            <div ref={props.ref}>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            {props.loading ? 
            <button onClick={alreadyLoading}>Loading recipe...</button> :
            <button onClick={props.getRecipe}>Get a recipe</button>
            }
            
        </div> : null}
    </section> : null
}