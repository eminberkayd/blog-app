import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    fetchPosts,
    fetchSinglePost,
    createPost,
    updatePost,
    deletePost
} from '../api/api';

const Post = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchPosts();
            console.log(data);
            setPosts(data);
        }
        getData();

    }, [])

    return (<>
        {
            posts.map((post, idx) => (<Card key={idx} sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {post.title}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        {post.body}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {post.author}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">Devamını Oku</Button>
                </CardActions>
            </Card>))

        }
    </>
    );
}

export default Post;
