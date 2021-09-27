import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const math = useRouteMatch();
    return (
        <div>
          <Switch>
              <Route path={math.path} component={ListPage} exact/>
              <Route path={`${math.path}/:todoId`} component={DetailPage} exact/>
              <Route component={NotFound}/>
          </Switch>
        </div>
    );
}

export default TodoFeature;