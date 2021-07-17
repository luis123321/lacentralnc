import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { 
  sportHeader1FirstThird,
  filterSport1FirstThird
} from '../../../constants';
import Sport1FirstThird from '.';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#3D4977',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontWeight: 800,
    padding: '0 16px'
  },
}))(TableCell);

const MatchUpsItem = ({data}) => {

  const classes = useStyles();
  const { sport } = data.league;
  
  const sport1TableFirstThird = (jsonData, index) => (
    <TableRow key={index} hover>
      <StyledTableCell className='sport-1-first-third-time' align='center'>
        {jsonData.time}
      </StyledTableCell>
      <StyledTableCell className='sport-1-first-third-#1'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.fourDigitCode.awayTeam}</span>
          <span>{jsonData.fourDigitCode.homeTeam}</span>
        </div>        
      </StyledTableCell>
      <StyledTableCell className='sport-1-first-third-team'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.team.awayTeam.alphabeticCode} - {jsonData.team.awayTeam.pitcherName}</span>
          <span>{jsonData.team.homeTeam.alphabeticCode} - {jsonData.team.homeTeam.pitcherName}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-first-third-t1-ml'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.t1MoneyLine.awayTeam}</span>
          <span>{jsonData.t1MoneyLine.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-first-third-t1-rl'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.t1RL.awayTeam.runLineSpread}  </span>
            <span>{jsonData.t1RL.awayTeam.runLineMoneyLine}  </span>
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.t1RL.homeTeam.runLineSpread}</span>
            <span>{jsonData.t1RL.homeTeam.runLineMoneyLine}</span>
          </div>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-first-third-t1-runs'>
        {jsonData.t1Spread}                  
      </StyledTableCell>
      <StyledTableCell className='sport-1-first-third-t1-ou$'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.t1OverUnder.over}</span>
          <span>{jsonData.t1OverUnder.under}</span>
        </div>
      </StyledTableCell>
    </TableRow>
  )

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            {
              sport===1&&sportHeader1FirstThird.map(item=>(
                <TableCell>{item}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            sport===1&&data.matchUps.map((item, index)=>{
              const jsonData = filterSport1FirstThird(item);
              console.log('jsonData', jsonData);
              return sport1TableFirstThird(jsonData, index)
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MatchUpsItem;