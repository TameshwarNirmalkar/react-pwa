import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/aboutus/About'));


const MainRoutes = () => {
    return (
        <Switch>
            <Route path="/about">
                <Suspense fallback={'.....Loading'}>
                    <About />
                </Suspense>
            </Route>
            <Route path="/">
                <Suspense fallback={'.....Loading'}>
                    <Home />
                </Suspense>
            </Route>
        </Switch>
    )
}

export default MainRoutes;