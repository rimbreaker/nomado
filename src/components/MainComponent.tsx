import React from 'react';
import '../App.css';
import SplashScreenHeader from './SplashScreenHeader';
import GlobeBackground from './GlobeBackground';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import DraftPage from './DartPage';
import SingleCityPage from './SingleCityPage';
import WidgetPage from './WidgetPage';
import RecentLocationsListPage from './RecentLocationsListPage';
import * as Paths from '../utils/Paths'

function MainComponent() {

    const SingleCityPageById = ({ match }: { match: any }) => {
        return <SingleCityPage id={match.params.id} />
    }


    return (
        <>
            <SplashScreenHeader />
            <Switch>
                <Route exact path={Paths.DART} component={DraftPage} />
                <Route exact path={Paths.WIDGET} component={WidgetPage} />
                <Route exact path={Paths.CITY}
                    component={SingleCityPageById}
                />
                <Route exact path={Paths.RECENT_LIST} component={RecentLocationsListPage} />
                <Route exact path={Paths.HOME} component={HomePage} />
                <Redirect to={Paths.HOME} />
            </Switch>
            <GlobeBackground />
        </>
    );
}

export default withRouter(MainComponent);
