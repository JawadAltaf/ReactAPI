import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import PageNotFound from './PageNotFound';

function ReactRouting()
{
    return(
        <Fragment>
            <Nav/>
            <Switch>
                <Route path="/about">
                    <AboutPage/>
                </Route>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
                <Route path="*">
                    <PageNotFound/>
                </Route>
            </Switch>
        </Fragment>
    )
}

export default ReactRouting;