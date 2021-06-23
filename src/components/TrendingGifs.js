import { useEffect, useState } from "react";
import Gif from "./gifs/Gif";
import routes from "../routes";

const TrendingGifs = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const getData = () => {
        fetch(routes.getTop20)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setData(result.data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }

    useEffect(() => {
        getData();
    }, [])

    if(error) {
        return <div>Erreur : { error.message }</div>;
    } else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return (
            <div>
                {/* Refresh Button */}
                <button className="btn btn-secondary mb-3" onClick={ getData }>Refresh Gifs</button>

                <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    { data.map(element => (
                        <Gif element={ element } key={ element.id } />
                    )) }
                </ul>
            </div>
        )
    }

}

export default TrendingGifs;