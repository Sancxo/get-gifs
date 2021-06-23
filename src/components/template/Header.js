import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
    // Dark mode functionnality
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const json = localStorage.getItem("go-dark-mode");
        const currentMode = JSON.parse(json);
        if(currentMode) {
        setDarkMode(true);
        document.getElementById('flexSwitchCheckDefault').setAttribute('checked', true);
        } else {
        setDarkMode(false);
        document.getElementById('flexSwitchCheckDefault').removeAttribute('checked');
        }
    }, [])

    useEffect(() => {
        if(darkMode) {
        document.body.classList.add("darkMode");
        } else {
        document.body.classList.remove("darkMode");
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("go-dark-mode", json);
    }, [darkMode])
    // End of dark Mode functionnality

    return (
        <header className="App-header">

            {/* DarkMode Switch */}
            <div id="dark-mode-switch" className="form-check form-switch fs-6 align-self-end me-3">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => setDarkMode(!darkMode)}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light/Dark mode</label>
            </div>

            <h1>Get Gifs.</h1>
            <Link to="/" className="fs-5">Home</Link>
            <SearchBar />
            
      </header>
    )
}

export default Header;