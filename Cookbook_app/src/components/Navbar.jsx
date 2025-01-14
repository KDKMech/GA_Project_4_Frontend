import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = ({handleSelection}) => {
    return (
        <nav className="d-flex justify-content-center bg-white ">
            <button onClick={handleSelection} className="btn btn-outline-dark m-3" value="Home">Home</button>
            <button onClick={handleSelection} className="btn btn-outline-dark m-3" value="RecipeSection">Recipe Index</button>
            <button onClick={handleSelection} className="btn btn-outline-dark m-3" value="RecipeForm">Add Recipe</button>
        </nav>
    )
}

export default Navbar;