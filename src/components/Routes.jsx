import React from 'react';
import Draw from './Draw'
import Home from './Home'
import Doodles from './Doodles'
import {Route} from 'react-router'


function Routes() {
  return (
    <div className="Routes">
      <Route path='/minesweeper'>
        <Draw/>
      </Route>
      
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/doodles'>
        <Doodles/>
      </Route>
    </div>
  );
}

export default Routes;