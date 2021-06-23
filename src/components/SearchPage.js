import { useEffect, useState } from "react";
import Gif from "./gifs/Gif";
import routes from "../routes";

const SearchPage = () => {
    // Fetch Data
    const {search} = window.location;
    const query = new URLSearchParams(search).get('query');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(routes.getSearch(query))
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.data);
                setIsLoaded(true);
            },
            (error) => {
                setError(error);
                setIsLoaded(true);
            }
        )
    }, [query])
    // End of Fetch

    if(error) {
        return <div>Erreur : { error.message }</div>;
    } else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return (
            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                {data.map(element => (
                    <Gif element={ element } key={ element.id } />
                ))}
            </ul>
        )
    }
}

export default SearchPage;