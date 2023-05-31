
import { AppBar, Toolbar, Typography } from '@mui/material';
const Footer = () => {
    return ( 
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                This is the footer
                </Typography>
            </Toolbar>
        </AppBar>
     );
}
 
export default Footer;