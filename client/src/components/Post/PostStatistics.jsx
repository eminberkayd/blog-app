import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

import { IconButton } from '@mui/material';

const PostStatistics = ({ props }) => {
    const { likes, comments } = props;
    return (<>

        <IconButton>
            <FavoriteIcon /> {likes ? likes.length : ''}
        </IconButton>

        <IconButton>
            <CommentIcon /> {comments ? comments.length : ''}
        </IconButton>
    </>)

}

export default PostStatistics;