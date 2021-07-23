import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { createTheme , ThemeProvider } from "@material-ui/core/styles";
import Crisp from 'react-crisp';
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from './components/header/';
import Intro from './components/intro/';
import { CrispId } from './constants';
import './App.css';


function App() {
  const state = useSelector(state => state);

  const theme = React.useMemo(
    () =>
    createTheme ({
        palette: {
          type: state.layout.darkMode  ? "dark" : "light",
          background: {
            paper: state.layout.darkMode?'#1E1E1E':'#fff',
            default: state.layout.darkMode?'#121212':'#fafafa',
          },
          primary: {
            main: '#E2A423'
          }
        },
        typography: {
          fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
          fontSize: 12,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
      }),
    [state.layout.darkMode]
  );
  
  useEffect(()=>{
      // Include the Crisp code here, without the <script></script> tags
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = CrispId;
  
      (function() {
        var d = document;
        var s = d.createElement("script");
  
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
  }, [])

  return (    
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Intro />
        {/* <Crisp crispWebsiteId={CrispId} /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
