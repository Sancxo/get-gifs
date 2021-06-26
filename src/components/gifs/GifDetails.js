import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

const GifDetails = ({element, open, handleClose}) => {
    const userLink = () => {
        return (
            <React.Fragment>
                <a href={element.user.profile_url} target="_blank" rel="noreferrer noopener">
                    { element.username }
                </a> 
                <a href={element.user.profile_url} target="_blank" rel="noreferrer noopener">
                    <img className="m-3 rounded-circle" alt="avatar" id="avatar" src={element.user.avatar_url} />
                </a> 
            </React.Fragment>
        )
    }

    // If some elements are not availables
    const user = element.username ? userLink() : "Anonym";
    const source = element.source ? <a href={element.source} target="_blank" rel="noreferrer noopener">Source</a> : "No source available.";
    const title = element.title ? element.title : "Untitled";

    return (
        // Material UI Dialog Box
        <Dialog open={ open } onClose={ handleClose }>
            <div id="dialog-ctn">

                {/* Head */}
                <div id="dialog-head" className="d-flex justify-content-between">
                    <DialogTitle>{ title }</DialogTitle>
                    <DialogActions>
                        <button style={{ border: 'none', background: 'none' }} onClick={ handleClose }>X</button>
                    </DialogActions>
                </div>

                {/* Body */}
                <DialogContent id="dialog-body">
                    <DialogContentText className="d-flex flex-column align-items-center">
                        <a href={ element.url } target="_blank" rel="noreferrer noopener"><img src={ element.images.original.url }  alt='Gif' className="mb-3"/></a>
                        <ul className="list-unstyled d-flex flex-column align-items-center flex-wrap">
                            <li className="text-center"><a href={ element.url } target="_blank" rel="noreferrer noopener">{ element.url }</a></li>
                            <li>Rating : { element.rating }</li>
                            <li>Creator : { user }</li>
                            <li>{ source }</li>
                        </ul>
                    </DialogContentText>
                </DialogContent>
                
            </div>
        </Dialog>
    )
}

export default GifDetails;