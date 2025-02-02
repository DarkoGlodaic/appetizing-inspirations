export default function IngredientList(props) {

    const listIngredients = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>    
    ))


    return props.ingredients.length > 0 ? <section className='ingredient-container'>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredient-list">{listIngredients}</ul>
        {props.ingredients.length > 3 ? <div  className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
        </div> : null}
    </section> : null
}