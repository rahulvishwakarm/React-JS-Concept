import React,{Suspense,lazy} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function RouteBasedCodeSplit() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/AboutUs" component={About} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default RouteBasedCodeSplit;