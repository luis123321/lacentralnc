import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width:350
  },
  title: {
      padding:'15px'
  }
}));

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

  
const ResultPop = () => {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleSportClick = (value) => {
    if (value===1) {
        window.open(
            'https://www.mlb.com/scores',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===2) {
        window.open(
            'https://www.flashscore.com/baseball/mexico/lmb/',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===3) {
        window.open(
            'http://mlb.mlb.com/milb/stats/scoreboard.jsp?sid=l131&t=l_sco&lid=131',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===4) {
        window.open(
            'https://www.nba.com/games#/',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===5) {
        window.open(
            'https://www.wnba.com/scores/#/10/25/2019',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===6) {
        window.open(
            'https://www.ncaa.com/scoreboard/basketball-men/d1',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===7) {
        window.open(
            'https://www.nhl.com/scores',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===8) {
        window.open(
            'https://www.nfl.com/scores/',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===9) {
        window.open(
            'https://www.cbssports.com/college-football/scoreboard/',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===10) {
        window.open(
            'https://www.cfl.ca/',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===11) {
        window.open(
            'https://www.soccer24.com/',
            '_blank' // <- This is what makes it open in a new window.
        );
    }
    if (value===12) {
        window.open(
            'https://www.foxsports.com/ufc/results',
            '_blank' // <- This is what makes it open in a new window.
        );
    }
    if (value===13) {
        window.open(
            'https://www.gallerosoy.com/#/resultados',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
  }

  const handleLotteryClick = (value) => {
    if (value===1) {
        window.open(
            'https://loteriasdominicanas.com/',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===2) {
        window.open(
            'https://www.lotterypost.com/results/ct',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===3) {
        window.open(
            'https://www.lotterypost.com/results/fl',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===4) {
        window.open(
            'https://www.lotterypost.com/results/nj',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===5) {
        window.open(
            'https://www.lotterypost.com/results/md',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===6) {
        window.open(
            'https://www.lotterypost.com/results/ny',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    if (value===7) {
        window.open(
            'https://www.lotterypost.com/results/ga',
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
  }

//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <Paper square>
//       <Tabs
//         value={value}
//         indicatorColor="primary"
//         textColor="primary"
//         onChange={handleChange}
//         aria-label="disabled tabs example"
//       >
//         <Tab label="Active" />
//         <Tab label="Disabled" disabled />
//         <Tab label="Active" />
//       </Tabs>
//     </Paper>
//   );



  return (
    <div className={classes.root}>
        <div className={classes.title}>
            <Typography variant='h5'>Results</Typography>
        </div>
        <div>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    TabIndicatorProps={{
                        style: {
                            width:'175px'
                        },
                    }}
                >
                    <Tab label="SPORTS" {...a11yProps(0)} />
                    <Tab label="LOTTERIES" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} >
                    <List component="nav"  aria-label="contacts" style={{height:'350px'}}>
                        <ListItem button onClick={()=>handleSportClick(1)} >
                            <ListItemText primary="MLB" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(2)} >
                            <ListItemText primary="LMB" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(3)} >
                            <ListItemText primary="LIDOM" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(4)} >
                            <ListItemText primary="NBA" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(5)} >
                            <ListItemText primary="WNBA" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(6)} >
                            <ListItemText primary="CBB" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(7)} >
                            <ListItemText primary="NHL" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(8)} >
                            <ListItemText primary="NFL" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(9)} >
                            <ListItemText primary="CFB" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(10)} >
                            <ListItemText primary="CFL" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(11)} >
                            <ListItemText primary="SOCCER" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(12)} >
                            <ListItemText primary="UFC" />
                        </ListItem>
                        <ListItem button onClick={()=>handleSportClick(13)} >
                            <ListItemText primary="GALLOS" />
                        </ListItem>
                    </List>
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <List component="nav"  aria-label="contacts" style={{height:'350px'}}>
                        <ListItem button onClick={()=>handleLotteryClick(1)} >
                            <ListItemText primary="MLB" />
                        </ListItem>
                        <ListItem button onClick={()=>handleLotteryClick(2)} >
                            <ListItemText primary="LMB" />
                        </ListItem>
                        <ListItem button onClick={()=>handleLotteryClick(3)} >
                            <ListItemText primary="LIDOM" />
                        </ListItem>
                        <ListItem button onClick={()=>handleLotteryClick(4)} >
                            <ListItemText primary="NBA" />
                        </ListItem>
                        <ListItem button onClick={()=>handleLotteryClick(5)} >
                            <ListItemText primary="WNBA" />
                        </ListItem>
                        <ListItem button onClick={()=>handleLotteryClick(6)} >
                            <ListItemText primary="CBB" />
                        </ListItem>
                        <ListItem button onClick={()=>handleLotteryClick(7)} >
                            <ListItemText primary="NHL" />
                        </ListItem>
                    </List>
                </TabPanel>
            </SwipeableViews>
        </div>
    </div>
  )
}

export default ResultPop;