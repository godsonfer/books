import React from 'react'

// Material design elements
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';



export default  class Header extends React.Component {
    render() {
        
        return (

            <React.Fragment>
              <AppBar position="static">
                <Toolbar>
                    <div>Menu</div>
                    <MenuIcon></MenuIcon>
                    <Menu open="">
                        <MenuItem>Home</MenuItem>
                    </Menu>
                    <AccountCircle style ={{marginLeft : '12px'}}></AccountCircle>

                </Toolbar>
              </AppBar>

            </React.Fragment>)
    }
}
