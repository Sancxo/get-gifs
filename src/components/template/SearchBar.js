import { useHistory, Link } from "react-router-dom";

const SearchBar = () => {
    // Single Page Application Search
    const history = useHistory();
    const onSubmit = () => {
        let query = document.getElementById("query") ? document.getElementById("query").value : "";
        history.push(`/search?query=${query}`);
    };

    return (
        <form type="search" className="w-25 my-3 d-flex" onSubmit={onSubmit}>
            {/* Search Bar */}
            <input id="query" name="query" className="form-control flex-shrink-0" placeholder="Search for Gifs ..." />
            <input type="submit" value="Go for Gifs" className="btn btn-secondary mx-1" />
            
            {/* Random Button */}
            <Link className="btn btn-secondary text-nowrap" to="/random">Get Lucky</Link>
        </form>
    )
}

export default SearchBar;