import { useEffect } from "react";

const GoUpButton = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            document.getElementById("go-up-btn").removeAttribute("hidden");
            if(window.scrollY === 0) {
                document.getElementById("go-up-btn").setAttribute("hidden", true);
            }
        })
    });

    const goTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <button 
            id="go-up-btn"
            className="btn btn-secondary mt-3" 
            style={{
                transform: "rotate(-90deg)", 
                position: "fixed", 
                bottom: "1rem", 
                right: "1rem", 
                zIndex: "1"
            }} 
            hidden={ true }
            onClick={ goTop }
        >
        {'>'}
        </button>
    )
}

export default GoUpButton;