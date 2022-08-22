import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateIcon from '@mui/icons-material/Create';
import { Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { createPost } from '../../api/api';

const NewPostForm = () => {
    const [open, setOpen] = useState(false);
    const [newPost, setNewPost] = useState({ title: "", body: "", author: "test" });


    const clickedOpen = () => {
        setOpen(true);
    }
    const clickedClose = () => {
        setOpen(false)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNewPost(prevState => ({ ...prevState, [name]: value }));

    }

    const submitted = async () => {
        const data = await createPost(newPost);

        console.log("new Post", newPost);
        console.log("response", data);
        setOpen(false);
    }

    return (<>
        <div align="right">
            <Button variant="outlined" onClick={clickedOpen} sx={{ marginTop: "10%" }}>
                <CreateIcon />
                Add New Post
            </Button>
        </div>
        <Dialog open={open} onClose={clickedClose} fullWidth={true} >
            <DialogTitle>Yeni Post</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter title and content
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
                />
                <div align="right">
                    <Typography variant='caption'>
                        {500 - newPost.body.length}
                    </Typography>
                </div>

            </DialogContent>
            <DialogActions>
                <Button size='large' variant='outlined' onClick={submitted} startIcon={<SendIcon />}>Submit</Button>

            </DialogActions>
        </Dialog>

    </>);


}


export default NewPostForm;