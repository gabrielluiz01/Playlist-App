import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Playlists from './pages/Paylists/Playlists';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Playlists}/>
    </Switch>
  </BrowserRouter>
)

export default Router;