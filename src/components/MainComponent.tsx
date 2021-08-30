import React from 'react';
import '../App.css';
import SplashScreenHeader from './SplashScreenHeader';
import GlobeBackground from './GlobeBackground';
import { Switch, Route, withRouter } from 'react-router-dom'
import HomePage from './HomePage'
import DraftPage from './DartPage';
import SingleCityPage from './SingleCityPage';
import WidgetPage from './WidgetPage';

function MainComponent() {
    const placeholderStyle = {
        display: 'flex',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        color: 'white',
        position: 'absolute'
    }
    return (
        < >
            <SplashScreenHeader />
            <Switch>
                <Route exact path="/dart" component={DraftPage} />
                <Route exact path="/search" component={WidgetPage} />
                <Route exact path="/city/:id" component={SingleCityPage} />
                <Route exact path="/recentlist" component={() => <div style={placeholderStyle as any}>recent list placeholder</div>} />
                <Route path="/" component={HomePage} />
            </Switch>
            <GlobeBackground />
        </>
    );
}

export default withRouter(MainComponent);
