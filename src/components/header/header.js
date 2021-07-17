import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SyncIcon from '@material-ui/icons/Sync';
import SelectAllIcon from '@material-ui/icons/SelectAll';
import { setColorMode } from 'store/modules/layout/actions';
import header_logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'block',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    margin: theme.spacing(1),
    textTransform:'uppercase',
    fontSize: '15px'
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          color="inherit"
          className={classes.button}
          startIcon={<SelectAllIcon />}
        >
          Parlay
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          color="inherit"
          className={classes.button}
        >
          results
        </Button>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <LanguageIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton 
          aria-label="show 17 new notifications" 
          color="inherit" 
          onClick={()=>{
            console.log('state.layout.darkMode', state.layout.darkMode);
            dispatch(setColorMode(!state.layout.darkMode))
          }}
        >
          {
            state.layout.darkMode?
              <Brightness7Icon style={{fontSize:'17px'}}/>:
              <Brightness4Icon style={{fontSize:'17px'}}/>
          } 
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <img src={header_logo} alt='logo' width={70}/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>            
            <Button
              color="inherit"
              className={classes.button}
              startIcon={<SyncIcon />}
            >
              Auto sync
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              startIcon={<SelectAllIcon />}
            >
              Parlay
            </Button>
            <Button
              color="inherit"
              className={classes.button}
            >
              results
            </Button>
            <IconButton aria-label="show 15 new notifications" color="inherit">
              <LanguageIcon style={{fontSize:'17px'}}/>
            </IconButton>
            <IconButton 
              aria-label="show 15 new notifications" 
              color="inherit"
              onClick={()=>{
                console.log('state.layout.darkMode', state.layout.darkMode);
                dispatch(setColorMode(!state.layout.darkMode))
              }}  
            >
              {
                state.layout.darkMode?
                  <Brightness7Icon style={{fontSize:'17px'}}/>:
                  <Brightness4Icon style={{fontSize:'17px'}}/>
              }              
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <Button
              color="inherit"
              className={classes.button}
              startIcon={<SyncIcon />}
            >
              Auto sync
            </Button>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Header;