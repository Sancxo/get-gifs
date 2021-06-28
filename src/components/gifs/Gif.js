import { useState } from "react";
import GifDetails from "./GifDetails";

const Gif = ({element}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    return(
        <div>
            
            {/* Gif Image */}
            <button key={ element.id } style={{ border: 'none', background: 'none' }} onClick={ handleOpen }>
                <li><img src={ element.images.original.url } alt='Gif' key={ element.id } style={{ width: '18rem', height: '18rem', objectFit: 'cover'}} /></li>
            </button>

            {/* Dialog box /w Gif details */}
            <GifDetails element={ element } open={ open } handleClose={ handleClose } />

        </div>
    )
}

export default Gif;