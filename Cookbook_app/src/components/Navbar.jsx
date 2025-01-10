import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = ({handleSelection}) => {
    return (
        <nav className="bg-white">
            <button onClick={handleSelection} className="btn btn-outline-dark m-3" value="Home">Home</button>
            <button onClick={handleSelection} className="btn btn-outline-dark m-3" value="RecipeList">Recipe Index</button>
            <button onClick={handleSelection} className="btn btn-outline-dark m-3" value="CreateRecipe">Add Recipe</button>
        </nav>
    )
}

export default Navbar;