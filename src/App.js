import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from 'components/header';
import Intro from 'components/Intro';
import { createTheme , ThemeProvider } from "@material-ui/core/styles";
import blue from '@material-ui/core/colors/blue';
import CssBaseline from "@material-ui/core/CssBaseline";

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
  
  return (    
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Intro />
      </ThemeProvider>
    </div>
  );
}

export default App;
