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
  sportHeader3Periods,
  filterSport3Periods
} from '../../../constants';
import './Sport3Periods.scss';

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

const Sport3Periods = ({data}) => {

  const classes = useStyles();
  const { sport } = data.league;
  
  const sport3TablePeriods = (jsonData, index) => (
    <TableRow key={index} hover>
      <StyledTableCell className='sport-3-periods-time' align='center'>
        {jsonData.time}
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-#1'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.fourDigitCode.awayTeam}</span>
          <span>{jsonData.fourDigitCode.homeTeam}</span>
        </div>        
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-team'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <img src={jsonData.team.awayTeam.img} alt='awayTeam' width={25}/>
            <span style={{marginLeft:'10px'}}>{jsonData.team.awayTeam.name}</span>
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <img src={jsonData.team.homeTeam.img} alt='homeTeam'  width={25}/>
            <span style={{marginLeft:'10px'}}>{jsonData.team.homeTeam.name}</span>
          </div>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-q1'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.q1.awayTeam}</span>
          <span>{jsonData.q1.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-q1s'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.q1S.awayTeam}</span>
          <span>{jsonData.q1S.homeTeam}</span>
        </div>            
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-q2'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.q2.awayTeam}</span>
          <span>{jsonData.q2.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-q2s'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.q2S.awayTeam}</span>
          <span>{jsonData.q2S.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-q3'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.q3.awayTeam}</span>
          <span>{jsonData.q3.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-q3s'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.q3S.awayTeam}</span>
          <span>{jsonData.q3S.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-q4'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.q4.awayTeam}</span>
          <span>{jsonData.q4.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-periods-q4s'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.q4S.awayTeam}</span>
          <span>{jsonData.q4S.homeTeam}</span>
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
              sport===3&&sportHeader3Periods.map(item=>(
                <TableCell>{item}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            sport===3&&data.matchUps.map((item, index)=>{
              const jsonData = filterSport3Periods(item);
              return sport3TablePeriods(jsonData, index)
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Sport3Periods;