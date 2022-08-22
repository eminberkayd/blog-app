import {
    AppBar, Button, Toolbar, Typography, Link, Badge, Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Header = () => {
    const unseen_msg_cnt = 1;
    const notify_cnt = 0;

    return (
        <AppBar color="primary" position='fixed' sx={{ height: "8%" }}>
            <Toolbar >
                <Stack direction="row">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>



                    <Link variant="h4" href='http://localhost:3000/posts' underline='none' color="white">Blog App</Link>
                </Stack>



                <Stack direction="row" sx={{ marginLeft: "auto" }}>
                    <IconButton>
                        <Badge badgeContent={notify_cnt} color="warning">
                            <NotificationsIcon fontSize='medium' />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={unseen_msg_cnt} color="warning">
                            <MailOutlineIcon fontSize="medium" />
                        </Badge>

                    </IconButton>
                    <IconButton>

                        <MoreHorizIcon />
                    </IconButton>
                </Stack>

            </Toolbar>

        </AppBar>
    );
}



export default Header;