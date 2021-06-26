import { useCallback, useEffect, useState } from "react";
import Gif from "./gifs/Gif";
import routes from "../routes";
import React from "react";

const SearchPage = () => {
    let displayedGifs = [];

    const {search} = window.location;
    const query = new URLSearchParams(search).get('query');

    // Fetch Data
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [gifNumber, setGifNumber] = useState(20);

    const getData = useCallback(() => {
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
        .then(setGifNumber(20))
    }, [query])

    data.forEach((element, index) => {
        if(index < gifNumber) {
            displayedGifs.push(element);
        }
    });
    
    if(gifNumber > 40) {
        document.getElementById('search-more-btn').setAttribute('disabled', true);
    } else {
        if (document.getElementById('search-more-btn')) {
            document.getElementById('search-more-btn').removeAttribute('disabled');
        }
    }

    useEffect(() => {
        getData();
    }, [getData]);
    // End of Fetch

    const onClick = () => {
        setGifNumber(gifNumber + 20);
    }

    if(error) {
        return <div>Erreur : { error.message }</div>;
    } else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return (
            <React.Fragment>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center mx-5 px-5">
                    {displayedGifs.map(element => (
                        <Gif element={ element } key={ element.id } />
                    ))}
                </ul>

                {/* More Button */}
                <button className="btn btn-secondary mt-3" id="search-more-btn" onClick={ onClick } disabled={false}>Get More Gifs</button>
            </React.Fragment>
        )
    }
}

export default SearchPage;