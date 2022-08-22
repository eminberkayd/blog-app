import { IconButton, Grid, Button } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete'

import { useState } from 'react';

import {
    deletePost
} from '../../api/api';

const DeletePost = ({ post }) => {
    const { _id } = post;

    const [open, setOpen] = useState(false)
    const deleteThisPost = () => {
        deletePost(_id);
        setOpen(false);
    }

    return (<>
        <Grid item style={{ margin: "auto" }}>
            <IconButton aria-label="delete" edge='start' color="inherit" onClick={() => setOpen(true)}>
                <DeleteIcon />
            </IconButton>
        </Grid>
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth={true} >
            <DialogTitle>Are you sure you want to delete this post ? </DialogTitle>
            <DialogContent>



            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="success" onClick={deleteThisPost}>Yes</Button>
                <Button variant="outlined" color="error" onClick={() => setOpen(false)}>No</Button>

            </DialogActions>
        </Dialog></>);
}

export default DeletePost;


