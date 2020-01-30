import React, { Fragment } from 'react';
import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
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
                                        {/* <Nav vertical> */}
                                            <DropdownItem className="nav-item-header">
                                                My Account
                                            </DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>
                                                <NavLink href="#" onClick={() => this.setState({ changePass: !this.state.changePass })}>
                                                    Change Password
                                                </NavLink>
                                                <Modal isOpen={this.state.changePass} fade={false} toggle={() => this.setState({ changePass: !this.state.changePass })} className={this.props.className}>
                                                    <ModalHeader toggle={() => this.setState({ changePass: !this.state.changePass })}>Change Password</ModalHeader>
                                                    <ModalBody>
                                                        <Form>
                                                            <FormGroup>
                                                                <Label for="current_password">Current Password*</Label>
                                                                <Input type='password' id="current_password" />
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Label for="new_password">New Password*</Label>
                                                                <Input type='password' id="new_password" />
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Label for="confirm_new_password">Confirm New Password*</Label>
                                                                <Input type='password' id="confirm_new_password" />
                                                            </FormGroup>                                               
                                                        </Form>

                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="link" onClick={() => this.setState({ changePass: !this.state.changePass })}>Cancel</Button>
                                                        <Button color="dark" onClick={() => this.setState({ changePass: !this.state.changePass })}>Update</Button>{' '}
                                                    </ModalFooter>
                                                </Modal>

                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink href="#">
                                                    Account Details
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink href="#">
                                                    Log Out
                                                </NavLink>
                                            </DropdownItem>
                                        {/* </Nav> */}
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
