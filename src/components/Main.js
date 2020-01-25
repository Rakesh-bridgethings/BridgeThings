import React, { Suspense, lazy, Fragment } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
// import { withRouter } from 'react-router-dom';
import ResizeDetector from 'react-resize-detector';
import Header from './includes/Header';
import LeftSidebar from './includes/LeftSidebar';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const PeroformanceDashboard = lazy(() => import('./dashboards/performance'));

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closedSmallerSidebar: false
        };

    }

    render() {
        let {
            colorScheme,
            enableFixedHeader,
            enableFixedSidebar,
            enableFixedFooter,
            enableClosedSidebar,
            closedSmallerSidebar,
            enableMobileMenu,
            enablePageTabsAlt,
        } = this.props;

        return (
            <ResizeDetector
                handleWidth
                render={({ width }) => (
                    <Fragment>
                        <div className={cx(
                            "app-container app-theme-" + colorScheme,
                            { 'fixed-header': enableFixedHeader },
                            { 'fixed-sidebar': enableFixedSidebar || width < 1250 },
                            { 'fixed-footer': enableFixedFooter },
                            { 'closed-sidebar': enableClosedSidebar || width < 1250 },
                            { 'closed-sidebar-mobile': closedSmallerSidebar || width < 1250 },
                            { 'sidebar-mobile-open': enableMobileMenu },
                        )}>                            
                                <Router>
                                    <Header />
                                    <div className="app-main">
                                        <LeftSidebar />
                                        <div className="app-main__outer">
                                            <div className="app-main__inner">
                                                <Suspense fallback={
                                                    <div className="loader-container">
                                                        <div className="loader-container-inner">
                                                            <h6 className="mt-5">
                                                                Please wait Perforamance Dashboard is loading ...
                                                            <small></small>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                }>
                                                    <Route path="/" component={PeroformanceDashboard} />
                                                </Suspense>
                                            </div>
                                        </div>
                                    </div>
                                </Router>
                            
                        </div>
                    </Fragment>
                )}
            />
        )
    }
}

const mapStateToProp = state => ({
    colorScheme: state.ThemeOptions.colorScheme,
    enableFixedHeader: state.ThemeOptions.enableFixedHeader,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableFixedFooter: state.ThemeOptions.enableFixedFooter,
    enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,

});

export default connect(mapStateToProp)(Main);