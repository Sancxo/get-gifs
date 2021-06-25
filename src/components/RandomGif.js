import { useEffect, useState } from "react";
import routes from "../routes";
import Gif from "./gifs/Gif";

const RandomGif = () => {
    // Fetch Data
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const getData = () => {
        fetch(routes.getRandom)
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
        );
    }

    useEffect(() => {
        getData();
    }, [])
    // End of Fetch

    const gifTitle = data.title ? data.title : "Untitled";
    const user = data.username ? data.username : "Anonym";

    if(error) {
        return <div>Erreur : { error.message }</div>;
    } else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return (
            <div>
                {/* Refresh Button */}
                <button className="btn btn-secondary mb-3" onClick={ getData }>Another one, please.</button>

                {/* Bootstrap Card */}
                <div className="d-flex justify-content-center mt-3">
                    <div className="card" style={{width: '18rem'}}>
                        <ul className="list-unstyled d-flex flex-wrap justify-content-center" >
                            <Gif element={ data } key={ data.id } /> 
                        </ul>
                        <div className="card-body">
                            <h5 className="card-title">{ gifTitle }</h5>
                            <p className="card-text">{ user }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomGif;