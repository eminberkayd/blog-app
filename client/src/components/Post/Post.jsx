// REST API imports
import {
    fetchPosts,
    fetchSinglePost,
    createPost,
    updatePost,
    deletePost
} from '../../api/api';

// React Hooks
import { useState, useEffect } from 'react';



//my components
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostStatistics from './PostStatistics';
//Icons - MUI
import ShareIcon from '@mui/icons-material/Share';

import DeletePost from './DeletePost';


//Components - MUI
import { IconButton, CardContent, Card, CardActions, Grid } from '@mui/material';
import EditPost from './EditPost';
import Edit from '@mui/icons-material/Edit';

const Post = () => {

    const [posts, setPosts] = useState([]);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchPosts();
            console.log(data);
            setPosts(data);
        }
        getData();

    }, [])

    return (<div align="center">
        {
            posts.reverse().map((post, idx) => (<Card key={idx} variant='outlined' sx={{ align: "center", width: '80%', marginBottom: "2%", marginTop: "3%" }}>
                <CardContent>
                    <PostHeader props={post} />
                    <PostContent props={post} />
                    <PostStatistics props={post} />
                </CardContent>
                <CardActions>
                    <Grid container direction="row" >
                        <Grid item style={{ margin: "auto" }}>
                            <IconButton color="inherit">
                                <ShareIcon />
                            </IconButton>
                        </Grid>
                        <EditPost post={post} />
                        <DeletePost post={post} />

                    </Grid>
                </CardActions>
            </Card >))

        }







    </div >
    );
}

export default Post;
