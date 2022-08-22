import { Typography, CardActionArea } from "@mui/material";

const PostContent = ({ props }) => {
    const { body } = props;
    return (<>
        <CardActionArea>
            <Typography variant="body1" align="left" gutterBottom>
                {body ? body : 'no content'}
            </Typography>

        </CardActionArea>
        <hr /> </>);
}

export default PostContent;