import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Playlists from './pages/Paylists/Playlists';
import AddNewMusic from './pages/Paylists/AddNewMusic';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Playlists}/>
      <Route path="/addnewmusic" component={AddNewMusic}/>
    </Switch>
  </BrowserRouter>
)

export default Router;