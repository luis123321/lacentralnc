import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'left'
  },
  title2: {
    fontSize: 15,
    textAlign:'left'
  },
  pos: {
    marginBottom: 12,
  },
}));

const Welcome = () => {

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <LinearProgress/>
        <br/>
        <Typography className={classes.title}>
          Welcome
        </Typography>
        <br/>
        <Typography className={classes.title2}>
          We're loading the latest lines, wait a moment please.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Welcome;