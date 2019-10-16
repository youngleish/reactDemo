import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Routes from './router'

function App() {

  return (
    <Switch>
      {
        Routes.map(({ path, exact = true, component, name }) => (
          <Route path={path} exact={exact} component={component} key={name} />
        ))
      }
    </Switch>
  );
}

export default App;
