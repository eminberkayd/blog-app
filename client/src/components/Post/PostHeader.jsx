import { Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import moment from "moment"

const PostHeader = ({ props }) => {

    const { title, author, createdAt } = props;

    const convertRelativeTime = (date) => {
        return moment(date).fromNow();
    }



    return (<>
        <Typography gutterBottom variant="h5" component="div" align="left">
            {title ? title : <br />}
        </Typography>
        <Typography gutterBottom variant="caption" component="span" align="left">
            {convertRelativeTime(createdAt)} |
        </Typography>
        <span align="right">
            <IconButton size="small">
                <PersonIcon /> {author ? author : 'anon'}
            </IconButton>
            <hr />
        </span></>)

}

export default PostHeader;