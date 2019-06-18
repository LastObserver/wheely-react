import * as React from 'react';
import { RouteComponentProps, Switch, Route, withRouter } from 'react-router';
import { Main } from '../pages/Main';

export interface IRouterProps { }

export const Index: React.SFC<IRouterProps & RouteComponentProps> = (props) => (
  <Switch>
    <Route exact path={'/'} component={Main} />
  </Switch>
);

export const RoutedContent = withRouter(Index);
