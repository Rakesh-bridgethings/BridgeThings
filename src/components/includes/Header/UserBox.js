import React, { Fragment } from 'react';
import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {
    toast,
    Bounce
} from 'react-toastify';
import {
    faCalendarAlt,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import { fetchtopUseritemdata } from '../../../services/SideNavItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            changePass: false,
        };

    }
    componentDidMount = async () => {
        const { fetchtopUseritemdata } = this.props;
        fetchtopUseritemdata();
    }

    notify2 = () => this.toastId = toast("You don't have any new items in your calendar for today! Go out and play!", {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });


    render() {
        // const { SideNavItem } = this.props.data;
        // console.log("props::", this.props);
        return (
            <Fragment>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="link" className="p-0">
                                        <img width={42} className="rounded-circle" src={avatar1} alt="" />
                                        <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleDown} />
                                    </DropdownToggle>
                                    <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                                        <Nav vertical>
                                            <NavItem className="nav-item-header">
                                                My Account
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="javascript:void(0);" onClick={() => this.setState({ changePass: !this.state.changePass })}>
                                                    Change Password
                                                </NavLink>
                                                <Modal isOpen={this.state.changePass} fade={false} toggle={() => this.setState({ changePass: !this.state.changePass })} className={this.props.className}>
                                                    <ModalHeader toggle={() => this.setState({ changePass: !this.state.changePass })}>Modal title</ModalHeader>
                                                    <ModalBody>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="link" onClick={() => this.setState({ changePass: !this.state.changePass })}>Cancel</Button>
                                                        <Button color="primary" onClick={() => this.setState({ changePass: !this.state.changePass })}>Do Something</Button>{' '}
                                                    </ModalFooter>
                                                </Modal>

                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="javascript:void(0);">
                                                    Account Details
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="javascript:void(0);">
                                                    Log Out
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>
                            <div className="widget-content-left  ml-3 header-user-info">
                                <div className="widget-heading">
                                    shankar piriya
                                </div>
                                <div className="widget-subheading">
                                    Super Administrator
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

// export default UserBox;
const mapStateToProps = state => {
    return { data: state }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchtopUseritemdata: fetchtopUseritemdata,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserBox);
