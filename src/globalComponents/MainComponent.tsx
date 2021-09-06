import React from 'react';
import SplashScreenHeader from '../pages/startPage/SplashScreenHeader';
import GlobeBackground from './GlobeBackground';
import { Switch, Route, withRouter, Redirect, RouteComponentProps } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import DraftPage from '../pages/dartPage/DartPage';
import SingleCityPage from '../pages/singleCityPage/SingleCityPage';
import WidgetPage from '../pages/widgetPage/WidgetPage';
import RecentLocationsListPage from '../pages/latestPlacesPage/RecentLocationsListPage';
import * as Paths from '../utils/Paths'

function MainComponent() {

    const SingleCityPageById = ({ match }: RouteComponentProps) => {
        return <SingleCityPage id={(match.params as {} & { id: string }).id} />
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
