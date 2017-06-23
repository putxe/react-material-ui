import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyNavbar from './MyNavbar.jsx';

export const App = () => (
  <MuiThemeProvider>
    <MyNavbar />
  </MuiThemeProvider>
);

