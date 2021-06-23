import { useHistory, Link } from "react-router-dom";

const SearchBar = () => {
    // SPA search
    const history = useHistory();
    const onSubmit = (e) => {
        let query = document.getElementById("query") ? document.getElementById("query").value : "";
        history.push(`/search?query=${query}`);
        e.preventDefault();
    };

    return (
        <form type="search" className="w-25 my-3 d-flex" onSubmit={onSubmit}>
            <input id="query" name="query" className="form-control flex-shrink-0" placeholder="Search for Gifs ..." />
            <input type="submit" value="Go for Gifs" className="btn btn-secondary mx-1" />
            
            {/* Random Button */}
            <Link className="btn btn-secondary text-nowrap" to="/random">Get Lucky</Link>
        </form>
    )
}

export default SearchBar;