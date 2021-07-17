import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MatchUpsItem from './MatchUpsItem';
import Sport1Extended from './Sport1Extended';
import Sport1FirstThird from './Sport1FirstThird';
import Sport3Periods from './Sport3Periods';

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
    fontSize: 14,
    textAlign: 'left',
  },
  pos: {
    marginBottom: 12,
  },
  cardTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
}));

const LeagueItem = ({data}) => {

  const classes = useStyles();  
  const { sport } = data.league;
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.cardTitle}>
          <Typography variant="h5">
            {data.league.name} ({data.league.abbreviation})
          </Typography>
          <img src={data.league.image.url} alt={data.league.name} width={40} height={40}/>
        </div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Active Match ups {data.matchUps.length}
        </Typography>
        <MatchUpsItem data={data} />
        {sport===1&&
          <div style={{marginTop:'20px'}}>
            <Typography variant="h5" style={{fontWeight:'bold', color:'grey'}}>
              Extended
            </Typography>
            <Sport1Extended data={data} />
          </div>
        }
        {sport===1&&
          <div style={{marginTop:'20px'}}>
            <Typography variant="h5" style={{fontWeight:'bold', color:'grey'}}>
              First third
            </Typography>
            <Sport1FirstThird data={data} />
          </div>
        }
        {sport===3&&
          <div style={{marginTop:'20px'}}>
            <Typography variant="h5" style={{fontWeight:'bold', color:'grey'}}>
              Periods
            </Typography>
            <Sport3Periods data={data} />
          </div>
        }
      </CardContent>
    </Card>
  )
}

export default LeagueItem;