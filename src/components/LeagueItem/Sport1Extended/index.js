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
  sportHeader1Extended,
  filterSport1Extended
} from '../../../constants';
import './Sport1Extended.scss';

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

const Sport1Extended = ({data}) => {

  const classes = useStyles();
  const { sport } = data.league;
  
  const sport1TableExtended = (jsonData, index) => (
    <TableRow key={index} hover>
      <StyledTableCell className='sport-1-extended-time' align='center'>
        {jsonData.time}
      </StyledTableCell>
      <StyledTableCell className='sport-1-extended-#1'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.fourDigitCode.awayTeam}</span>
          <span>{jsonData.fourDigitCode.homeTeam}</span>
        </div>        
      </StyledTableCell>
      <StyledTableCell className='sport-1-extended-team'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.team.awayTeam.alphabeticCode} - {jsonData.team.awayTeam.pitcherName}</span>
          <span>{jsonData.team.homeTeam.alphabeticCode} - {jsonData.team.homeTeam.pitcherName}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-extended-h1-ml'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.firstHalfMoneyLine.awayTeam}</span>
          <span>{jsonData.firstHalfMoneyLine.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-extended-runs'>
        {jsonData.firstHalfSpread}                  
      </StyledTableCell>
      <StyledTableCell className='sport-1-extended-ou$'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.firstHalfOverUnder.over}</span>
          <span>{jsonData.firstHalfOverUnder.under}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-extended-h1-rl'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.firstHalfRL.awayTeam.runLineSpread}  </span>
            <span>{jsonData.firstHalfRL.awayTeam.runLineMoneyLine}  </span>
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.firstHalfRL.homeTeam.runLineSpread}</span>
            <span>{jsonData.firstHalfRL.homeTeam.runLineMoneyLine}</span>
          </div>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-extended-so'>
        <span>{jsonData.so}</span>
      </StyledTableCell>
      <StyledTableCell className='sport-1-extended-alt-rl'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.altRL.awayTeam.alternativeRunLineSpread}</span>
            <span>{jsonData.altRL.awayTeam.alternativeRunLineMoneyLine}</span>
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.altRL.homeTeam.alternativeRunLineSpread}</span>
            <span>{jsonData.altRL.homeTeam.alternativeRunLineMoneyLine}</span>
          </div>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-extended-rhe'>
        <span>{jsonData.rhe}</span>
      </StyledTableCell>
    </TableRow>
  )

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            {
              sport===1&&sportHeader1Extended.map(item=>(
                <TableCell>{item}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            sport===1&&data.matchUps.map((item, index)=>{
              const jsonData = filterSport1Extended(item);
              return sport1TableExtended(jsonData, index)
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Sport1Extended;