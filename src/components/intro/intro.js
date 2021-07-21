import React, {useEffect, useState} from 'react';
import './Intro.scss'
import Grid from '@material-ui/core/Grid';
import header_right from '../../assets/header_right.png';
import * as SportService from 'services/lasport.service';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LeagueItem from '../LeagueItem';
import Welcome from '../Welcome';
import Alert from '@material-ui/lab/Alert';
import ResultPop from '../ResultPop';

const Intro = () => {

  const [data, setData] = useState(null);
  useEffect(()=>{
    SportService.getSportData().then(response=>{      
      const filterData = response.filter(item=>item.matchUps.length!==0);
      console.log('response', filterData)
      setData(filterData);
    })
  }, [])

  return (
    <React.Fragment>
      <div style={{marginTop:'100px'}} />
      <Container fixed>
        {
          data?data.length!==0?
            data.map((item, index)=>(
              <LeagueItem key={index} data={item} />
            )):
            <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
              <Alert variant="filled" severity="info" style={{justifyContent:'center', width:'340px'}}>
                There are no  available lines, please try again later
              </Alert>
            </div>
            :
            <Welcome />
        }
      </Container>
    </React.Fragment>
  )
}

export default Intro;