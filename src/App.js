import React from 'react';
import './App.css';


import {Grid}  from "@material-ui/core"

import Header from './Components/Header'
import User from './Components/User'
import Books from './Components/Books'
import Details from './Components/Details'


function App() {
  return (
    <div className="App">
         <Header/>
          <Grid container fluid>
                    <Grid item xs ={3}>
                    <User></User>
                    </Grid>
                    <Grid item xs ={6}>
                        <Books/>
                    </Grid>
                    <Grid item xs ={3}>
                        <Details/>
                    </Grid>

                </Grid>
    </div>
  );
}

export default App;
