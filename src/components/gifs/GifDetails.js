import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

const GifDetails = ({element, open, handleClose}) => {
    const user = element.username ? element.username : "Anonym";
    const source = element.source ? <a href={element.source} target="_blank" rel="noreferrer noopener">Source</a> : "No source available."

    return (
        // Material UI Dialog Box
        <Dialog open={ open } onClose={ handleClose }>
            <div id="dialog-ctn">
                <div id="dialog-head" className="d-flex justify-content-between">
                    <DialogTitle>{ element.title }</DialogTitle>
                    <DialogActions>
                        <button style={{ border: 'none', background: 'none' }} onClick={ handleClose }>X</button>
                    </DialogActions>
                </div>
                <DialogContent id="dialog-body">
                    <DialogContentText className="d-flex flex-column align-items-center">
                        <img src={ element.images.original.url }  alt='Gif' className="mb-3"/>
                        <ul className="list-unstyled d-flex flex-column align-items-center flex-wrap">
                            <li className="text-center"><a href={ element.url }>{ element.url }</a></li>
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