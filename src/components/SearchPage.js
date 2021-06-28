import { useCallback, useEffect, useState } from "react";
import Gif from "./gifs/Gif";
import routes from "../routes";
import React from "react";

const SearchPage = () => {
    // Fetch Data
    
    // search variables
    const {search} = window.location;
    const query = new URLSearchParams(search).get('query');
    const [previousQuery, setPreviousQuery] = useState('');

    // fetch variables
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);

    const getData = useCallback((newOffset) => {
        fetch(routes.getSearch(query, newOffset))
        .then(res => res.json())
        .then(
            (res) => {
                setData(previousData => ([...previousData, ...res.data]));
                setIsLoaded(true);
            },
            (err) => {
                setError(err);
                setIsLoaded(true);
            }
        )
        .then(setPreviousQuery(query))
        .then(setOffset(newOffset + 50))
    }, [query, setData]);

    // fetch new pages
    const fetchMore = () => {
        let newOffset = offset + 50;
        getData(newOffset);
    };

    // Check if there is a new search to reinit the data array to avoid render old results
    // Check also if there is a refresh in navigator to avoid duplication of the same results.
    useEffect(() => {
        if(previousQuery !== query || PerformanceNavigation.TYPE_RELOAD) {
            setData([]);
        }
    }, [setData, previousQuery, query])

    //first fetch
    useEffect(() => {
        getData(0);
    }, [getData]);

    // End of Fetch

    if(error) {
        return <div>Erreur : { error.message }</div>;
    } else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return (
            <React.Fragment>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center mx-5 px-5">
                    {data.map(element => (
                        <Gif element={ element } key={ element.id } />
                    ))}
                </ul>

                {/* More Button */}
                <button className="btn btn-secondary mt-3" id="fetch-new-set" onClick={ fetchMore } hidden={false}>Still want more ?</button>
            </React.Fragment>
        )
    }
}

export default SearchPage;