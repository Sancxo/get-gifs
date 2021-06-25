import { useEffect, useState } from "react";
import Gif from "./gifs/Gif";
import routes from "../routes";
import React from "react";

const TrendingGifs = () => {
    // Fetch Data
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const getData = () => {
        fetch(routes.getTop20)
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
    }

    useEffect(() => {
        getData();
    }, [])
    // End of Fetch

    if(error) {
        return <div>Erreur : { error.message }</div>;
    } else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return (
            <React.Fragment>
                {/* Refresh Button */}
                <button className="btn btn-secondary mb-3" onClick={ getData }>Refresh Gifs</button>

                {/* List of Top20 Gifs */}
                <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    { data.map(element => (
                        <Gif element={ element } key={ element.id } />
                    )) }
                </ul>

            </React.Fragment>
        )
    }

}

export default TrendingGifs;