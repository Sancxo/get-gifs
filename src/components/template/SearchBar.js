import { useHistory } from "react-router-dom";

const SearchBar = () => {
    // SPA search
    const history = useHistory();
    const onSubmit = (e) => {
        let query = document.getElementById("query") ? document.getElementById("query").value : "";
        history.push(`/search?query=${query}`);
        e.preventDefault();
    };

    // const onRandom = () => {
    //     history.push("/random");
    // }

    return (
        <form type="search" className="w-25 my-3 d-flex" onSubmit={onSubmit}>
            <input id="query" name="query" className="form-control flex-shrink-0" placeholder="Search for Gifs ..." />
            <input type="submit" value="Go for Gifs" className="btn btn-secondary mx-1" />
            {/* <input type="button" value="Get Lucky" className="btn btn-secondary" onSubmit={onRandom} /> */}
        </form>
    )
}

export default SearchBar;