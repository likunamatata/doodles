import React from 'react';
import Draw from './Draw'
import Home from './Home'
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
    </div>
  );
}

export default Routes;