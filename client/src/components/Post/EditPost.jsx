import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

import {
    updatePost,
} from '../../api/api';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import { Typography, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';


const EditPost = ({ post }) => {

    const { title, body, _id } = post;

    const [open, setOpen] = useState(false)
    const [newPost, setNewPost] = useState({ title: title, body: body, author: "test" });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNewPost(prevState => ({ ...prevState, [name]: value }));

    }

    const updatePostandCloseDialog = () => {
        updatePost(_id, newPost);
        console.log(newPost);
        setOpen(false);
    }

    return (<>
        <Grid item style={{ margin: "auto" }}>
            <IconButton aria-label="delete" edge='start' color="inherit" onClick={() => setOpen(true)} >
                <EditIcon />

            </IconButton>
        </Grid>
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth={true} >
            <DialogTitle>Edit the Post </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please make your changes
                </DialogContentText>
                <TextField
                    autoFocus
                    inputProps={{
                        maxLength: 50,

                    }}
                    margin="dense"
                    id="title"
                    name="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    multiline
                    onChange={handleChange}
                    value={newPost.title}
                />
                <div align="right">
                    <Typography variant='caption'>
                        {50 - newPost.title.length}
                    </Typography>
                </div>
                <TextField
                    autoFocus
                    inputProps={{
                        maxLength: 500,
                        minLength: 3
                    }}
                    margin="dense"
                    id="body"
                    name="body"
                    label="Content"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                    multiline
                    value={newPost.body}
                />
                <div align="right">
                    <Typography variant='caption'>
                        {500 - newPost.body.length}
                    </Typography>
                </div>

            </DialogContent>
            <DialogActions>

                <Button variant='outlined' startIcon={<SaveIcon />} onClick={updatePostandCloseDialog}>Save</Button>

            </DialogActions>
        </Dialog></>);
}

export default EditPost;