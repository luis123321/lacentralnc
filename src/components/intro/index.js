import React, {useEffect, useState, useLayoutEffect} from 'react';
import Alert from '@material-ui/lab/Alert';
import * as SportService from 'services/lasport.service';
import * as StrapiService from 'services/strapi.service';
import Container from '@material-ui/core/Container';
import LeagueItem from 'components/LeagueItem/';
import Welcome from 'components/Welcome/';
import './intro.scss';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Intro = () => {

  const [width, height] = useWindowSize();

  const [data, setData] = useState(null);
  const [adsData, setAdsData] = useState(null);

  useEffect(()=>{
    SportService.getSportData().then(response=>{      
      const filterData = response.filter(item=>item.matchUps.length!==0);
      setData(filterData);
    })

    StrapiService.getAdsData().then(response=>{      
      console.log('adsData', response);
      setAdsData(response);
    })
  }, [])

  return (
    <React.Fragment>
      <div style={{marginTop:'100px'}} />
      <Container fixed>
        {
          adsData&&
            <div className='ads-image'>
              {width > 400 && <img src={`${adsData.background_desk.url}`} alt='intro-image' width="100%"/>}
              {width < 400 && <img src={`${adsData.background_mobile.url}`} alt='intro-image' width="100%"/>}
            </div>
        }        
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