import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MetisMenu from 'react-metismenu';
import { DashboardsNav } from './NavItems';
import { fetchsidenavitemdata } from '../../services/SideNavItem'

class Nav extends Component {
    state = {
        content: [],
    };

    componentDidMount = async () => {
        const { fetchsidenavitemdata } = this.props;
        fetchsidenavitemdata();
    }

    render() {
        const { SideNavItem } = this.props.data;        
        return (
            <Fragment>
                {!SideNavItem.pending && SideNavItem.sidenavitem.map((item, index) => {
                    const sidebarMenu = [
                        {
                            icon: item.icon,
                            label: item.text,
                            content:
                                item.menuItems.map((item1, index1) => {
                                    return (
                                        {
                                            label: item1.label,
                                            to: item1.url,
                                        }
                                    )
                                })
                        },
                    ];
                    return (
                        <Fragment>
                            <MetisMenu content={sidebarMenu} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                        </Fragment>
                    )
                })}

            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

// export default withRouter(Nav);

const mapStateToProps = state => {
    return { data: state }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchsidenavitemdata: fetchsidenavitemdata,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
