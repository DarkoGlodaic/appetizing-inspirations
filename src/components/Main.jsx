export default function Main() {
    return (
        <main>
            <form className="ingredient-form">
                <input
                    aria-label="Add ingredient"
                    className="input-text"
                    type="text"
                    placeholder="eg. tomato"        
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}