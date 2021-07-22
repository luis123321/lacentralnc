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
  sportHeader1,
  sportHeader2,
  sportHeader3,
  sportHeader7,
  sportHeader9,
  sportHeader10,
  filterSport1,
  filterSport2,
  filterSport3,
  filterSport7,
  filterSport9,
  filterSport10  
} from '../../../constants';
import './MatchUpsItem.scss';

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
  
  const sport1Table = (jsonData, index) => (
    <TableRow key={index} hover>
      <StyledTableCell className='sport-1-time' align='center'>
        {jsonData.time}
      </StyledTableCell>
      <StyledTableCell className='sport-1-#1'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.fourDigitCode.awayTeam}</span>
          <span>{jsonData.fourDigitCode.homeTeam}</span>
        </div>        
      </StyledTableCell>
      <StyledTableCell className='sport-1-team'>
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
      <StyledTableCell className='sport-1-ml'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.moneyLine.awayTeam}</span>
          <span>{jsonData.moneyLine.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-total'>
        {jsonData.spread}                  
      </StyledTableCell>
      <StyledTableCell className='sport-1-ol$'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.overUnder.over}</span>
          <span>{jsonData.overUnder.under}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-rl'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.rl.awayTeam.runLineSpread}  </span>
            <span>{jsonData.rl.awayTeam.runLineMoneyLine}  </span>
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.rl.homeTeam.runLineSpread}</span>
            <span>{jsonData.rl.homeTeam.runLineMoneyLine}</span>
          </div>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-yn'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.yn.scoreOnFirstInning}</span>
          <span>{jsonData.yn.noScoreOnFirstInning}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-srl'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.srl.awayTeam.superRunLineSpread}</span>
            <span>{jsonData.srl.awayTeam.superRunLineMoneyLine}</span>
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <span>{jsonData.srl.homeTeam.superRunLineSpread}</span>
            <span>{jsonData.srl.homeTeam.superRunLineMoneyLine}</span>
          </div>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-1-solo'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.solo.awayTeam}</span>
          <span>{jsonData.solo.homeTeam}</span>
        </div>
      </StyledTableCell>
    </TableRow>
  )

  const sport2Table = (jsonData, index) => (
    <TableRow key={index} hover>
      <StyledTableCell className='sport-2-time' align='center'>
        {jsonData.time}
      </StyledTableCell>
      <StyledTableCell className='sport-2-#'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.fourDigitCode.awayTeam}</span>
          <span>{jsonData.fourDigitCode.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-2-team'>
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
      <StyledTableCell className='sport-2-ml'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.moneyLine.awayTeam}</span>
          <span>{jsonData.moneyLine.homeTeam}</span>
        </div>
      </StyledTableCell>
    </TableRow>
  )

  const sport3Table = (jsonData, index) => (
    <TableRow key={index} hover>
      <StyledTableCell className='sport-3-time' align='center'>
        {jsonData.time}
      </StyledTableCell>
      <StyledTableCell className='sport-3-#'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.fourDigitCode.awayTeam}</span>
          <span>{jsonData.fourDigitCode.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-team'>
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
      <StyledTableCell className='sport-3-ml'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.moneyLine.awayTeam}</span>
          <span>{jsonData.moneyLine.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-spread'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.spread.one}</span>
          <span>{jsonData.spread.two}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-solo'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.solo.awayTeam}</span>
          <span>{jsonData.solo.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-hl'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.h1.one}</span>
          <span>{jsonData.h1.two}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-3-h-solo'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.hSolo.awayTeam}</span>
          <span>{jsonData.hSolo.homeTeam}</span>
        </div>
      </StyledTableCell>
    </TableRow>
  )

  const sport7Table = (jsonData, index) => (
    <TableRow key={index} hover>
      <StyledTableCell className='sport-7-time' align='center'>
        {jsonData.time}
      </StyledTableCell>
      <StyledTableCell className='sport-7-#'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.fourDigitCode.awayTeam}</span>
          <span>{jsonData.fourDigitCode.homeTeam}</span>
        </div> 
      </StyledTableCell>
      <StyledTableCell className='sport-7-team'>
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
      <StyledTableCell className='sport-7-ml'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.moneyLine.awayTeam}</span>
          <span>{jsonData.moneyLine.homeTeam}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-7-rl'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.rl.awayTeam.runLineSpread}</span>
          <span>{jsonData.rl.homeTeam.runLineSpread}</span>
        </div>     
      </StyledTableCell>
      <StyledTableCell className='sport-7-rl$'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.rl.awayTeam.runLineMoneyLine}</span>
          <span>{jsonData.rl.homeTeam.runLineMoneyLine}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-7-total'>
        {jsonData.spread}
      </StyledTableCell>
      <StyledTableCell className='sport-7-ou$'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.overUnder.over}</span>
          <span>{jsonData.overUnder.under}</span>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-7-tie'>
        {jsonData.tie}
      </StyledTableCell>
    </TableRow>
  )

  const sport9Table = (jsonData, index) => (
    <TableRow key={index} hover>
      <StyledTableCell className='sport-9-time' align='center'>
        {jsonData.time}
      </StyledTableCell>
      <StyledTableCell className='sport-9-#'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.fourDigitCode.awayTeam}</span>
          <span>{jsonData.fourDigitCode.homeTeam}</span>
        </div> 
      </StyledTableCell>
      <StyledTableCell className='sport-9-team'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            {jsonData.team.awayTeam.img&&<img src={jsonData.team.awayTeam.img} alt='awayTeam' width={25}/>}
            <span style={{marginLeft:'10px'}}>{jsonData.team.awayTeam.name}</span>
          </div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            {jsonData.team.homeTeam.img&&<img src={jsonData.team.homeTeam.img} alt='homeTeam'  width={25}/>}
            <span style={{marginLeft:'10px'}}>{jsonData.team.homeTeam.name}</span>
          </div>
        </div>
      </StyledTableCell>
      <StyledTableCell className='sport-9-ml'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.moneyLine.awayTeam}</span>
          <span>{jsonData.moneyLine.homeTeam}</span>
        </div>
      </StyledTableCell>
    </TableRow>
  )

  const sport10Table = (jsonData, index) => (
    <TableRow key={index} hover>
      <StyledTableCell className='sport-10-time'>
        {jsonData.time}
      </StyledTableCell>
      <StyledTableCell className='sport-10-#'>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          {jsonData.fourDigitCode.img&&<img src={jsonData.fourDigitCode.img} alt='homeTeam'  width={25}/>}
          <span>{jsonData.fourDigitCode.info}</span>
        </div> 
      </StyledTableCell>
      <StyledTableCell className='sport-10-team'>
        <span style={{marginLeft:'10px'}}>{jsonData.team.location}-{jsonData.team.name}</span>
      </StyledTableCell>
      <StyledTableCell className='sport-10-category'>
        <span>{jsonData.category}</span>
      </StyledTableCell>
      <StyledTableCell className='sport-10-total'>
        <span>{jsonData.total}</span>   
      </StyledTableCell>
      <StyledTableCell className='sport-10-overUnder'>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span>{jsonData.overUnder.over}</span>
          <span>{jsonData.overUnder.under}</span>
        </div>
      </StyledTableCell>
    </TableRow>
  )

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="caption table" >
        <TableHead>
          <TableRow>
            {
              sport===1&&sportHeader1.map(item=>(
                <TableCell>{item}</TableCell>
              ))
            }
            {
              sport===2&&sportHeader2.map(item=>(
                <TableCell>{item}</TableCell>
              ))
            }
            {
              sport===3&&sportHeader3.map(item=>(
                <TableCell>{item}</TableCell>
              ))
            }
            {
              sport===7&&sportHeader7.map(item=>(
                <TableCell>{item}</TableCell>
              ))
            }
            {
              sport===9&&sportHeader9.map(item=>(
                <TableCell>{item}</TableCell>
              ))
            }
            {
              sport===10&&sportHeader10.map(item=>(
                <TableCell>{item}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            sport===1&&data.matchUps.map((item, index)=>{
              const jsonData = filterSport1(item);
              console.log('jsonData', jsonData);
              return sport1Table(jsonData, index)
            })
          }
          {
            sport===2&&data.matchUps.map((item, index)=>{
              const jsonData = filterSport2(item);
              return sport2Table(jsonData, index)
            })
          }
          {
            sport===3&&data.matchUps.map((item, index)=>{
              const jsonData = filterSport3(item);
              console.log('sport---3', jsonData);
              return sport3Table(jsonData, index)
            })
          }
          {
            sport===7&&data.matchUps.map((item, index)=>{
              const jsonData = filterSport7(item);
              return sport7Table(jsonData, index)
            })
          }
          {
            sport===9&&data.matchUps.map((item, index)=>{
              const jsonData = filterSport9(item);
              return sport9Table(jsonData, index)
            })
          }
          {
            sport===10&&data.matchUps.map((item, index)=>{
              const jsonData = filterSport10(item);
              return sport10Table(jsonData, index)
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MatchUpsItem;