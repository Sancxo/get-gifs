import { useEffect, useState } from "react";
import routes from "../routes";
import Gif from "./gifs/Gif";

const RandomGif = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const getData = async () => {
        fetch(routes.getRandom)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setData(result.data);
                console.log(result);

            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }

    useEffect(() => {
        getData();
    }, [])

    const element = data;

    console.log(data);
    console.log(typeof(data));

    if(error) {
        return <div>Erreur : { error.message }</div>;
    } else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return (
            <div>
                {/* Refresh Button */}
                <button className="btn btn-secondary mb-3" onClick={ getData }>Refresh Gifs</button>
                
                <div className="d-flex justify-content-center mt-3">
                    <div className="card" style={{width: '18rem', boxSizing: 'content-box !important'}}>
                        <ul className="list-unstyled d-flex flex-wrap justify-content-center" >
                            <Gif element={ element } key={ element.id } />
                        </ul>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomGif;