import React, { Suspense, lazy, Fragment, Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { bindActionCreators } from 'redux';
import ResizeDetector from 'react-resize-detector';
import Header from '../components/includes/Header';
import LeftSidebar from '../components/includes/LeftSidebar';
import Location from '../components/location';
import User from '../components/users';
import Entities from '../components/entities';
import IOTDevices from '../components/IOTdevices';
import PerformanceDashboard from '../components/dashboards/performance';

import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
// import { fetchsidenavitemdata } from '../services/SideNavItem';
// const PeroformanceDashboard = lazy(() => import('./dashboards/performance'));
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closedSmallerSidebar: false
        };
    }
    componentDidMount = async () => {
        // const { fetchsidenavitemdata } = this.props;
        // fetchsidenavitemdata();
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
                                            {/* <Suspense fallback={
                                                    <div className="loader-container">
                                                        <div className="loader-container-inner">
                                                            <h6 className="mt-5">
                                                                Please wait Perforamance Dashboard is loading ...
                                                            <small></small>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                }> */}
                                            {/* <Route path="/" component={PeroformanceDashboard} /> */}
                                            {/* </Suspense> */}
                                            <Route path="/test_dashboard" component={PerformanceDashboard} />
                                            <Route path="/locations" component={Location} />
                                            <Route path="/users" component={User} />
                                            <Route path="/entities" component={Entities}/>
                                             <Route path="/iotdevices" component={IOTDevices}/>
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
const mapStateToProps = state => ({
    colorScheme: state.ThemeOptions.colorScheme,
    enableFixedHeader: state.ThemeOptions.enableFixedHeader,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableFixedFooter: state.ThemeOptions.enableFixedFooter,
    enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
    // match: state.match,
    data: state,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    // fetchsidenavitemdata: fetchsidenavitemdata,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
