import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));
const DashBoardAnalytics = Loadable(lazy(() => import('../views/dashboard/analytics')));

// widget routing
const Statistics = Loadable(lazy(() => import('../views/widget/statistics')));

// application routing
const ApplicationContactCard = Loadable(lazy(() => import('../views/application/contact/Card')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

// application routing // eltr
const AppUserSocialProfile = Loadable(lazy(() => import('../views/application/index')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/dashboard/default',
                '/dashboard/analytics',

                '/application/contact/cards',
                '/application/contact/list',

                '/widget/statistics',

                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',

                '/icons/tabler-icons',
                '/icons/material-icons',

                '/sample-page',
                '/user/social-profile/posts'
            ]}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <Route path="/dashboard/default" component={DashboardDefault} />
                    <Route path="/dashboard/analytics" component={DashBoardAnalytics} />

                    <Route path="/application/contact/cards" component={ApplicationContactCard} />
                    <Route path="/application/contact/list" component={DashboardDefault} />

                    <Route path="/widget/statistics" component={Statistics} />

                    <Route path="/utils/util-typography" component={UtilsTypography} />
                    <Route path="/utils/util-color" component={UtilsColor} />
                    <Route path="/utils/util-shadow" component={UtilsShadow} />
                    <Route path="/icons/tabler-icons" component={UtilsTablerIcons} />
                    <Route path="/icons/material-icons" component={UtilsMaterialIcons} />

                    <Route path="/sample-page" component={SamplePage} />

                    {/* Change your path */}
                    <Route path="/user/social-profile/posts" component={AppUserSocialProfile} />
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
