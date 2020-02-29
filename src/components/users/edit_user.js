import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { fetchroleitemdata, updatedUserData, fetchEditPrimaryLocation } from '../../services/User';
import { fetchorganizationdata } from '../../services/Location';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button,
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../library/notification';
import Editprimarylocation from './edit_primarylocation';
var diff = require('deep-diff').diff;

class Edituser extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        })
    }
    state = {
        nextedituser: false,
        emailNotification: false,
        smsNotification: false,
        nextclick: false,
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        role: '',
        id: '',
        oraganization: '',
        userstepdata: {},
        disabledSMS: false,
        nextmodaluser: false,
        addnextmodaluser: false,
        editprilocmodal: false,
        nexteditprimarylocation: false,
        editusermodal: false,
        getEditData: {},
        activeStatus: 0,
        locationdata: [],
    }
    componentDidMount = async () => {
        const { fetchroleitemdata, fetchorganizationdata } = this.props;
        await fetchroleitemdata();
        await fetchorganizationdata();
    }
    componentWillReceiveProps = async (props) => {
        let { User } = props.data;
        User.edituseritem && await this.setState({
            id: User.edituseritem.id,
            firstname: User.edituseritem.firstName,
            lastname: User.edituseritem.lastName,
            email: User.edituseritem.email,
            phonenumber: User.edituseritem.mobileNo,
            role: { value: User.edituseritem.role, label: User.edituseritem.roleName },
            oraganization: { value: User.edituseritem.entityId, label: User.edituseritem.entityName },
            activeStatus: User.edituseritem.status
        });
        if (User.edituseritem) {
            User.edituseritem.notificationMode === 'Email' ? await this.setState({ emailNotification: true }) : User.edituseritem.notificationMode === 'Phone' ? await this.setState({ smsNotification: true }) : User.edituseritem.notificationMode === null ? await this.setState({ emailNotification: false, smsNotification: false }) : await this.setState({ emailNotification: true, smsNotification: true });
            const getEditData = {
                id: this.props.data.User.edituseritem.id,
                firstname: this.props.data.User.edituseritem.firstName,
                lastname: this.props.data.User.edituseritem.lastName,
                email: this.props.data.User.edituseritem.email,
                phonenumber: this.props.data.User.edituseritem.mobileNo,
                role: this.props.data.User.edituseritem.role,
                oraganization: this.props.data.User.edituseritem.entityId,
            };
            this.setState({ getEditData });
        }
    }

    onFirstname = (e) => {
        this.setState({ firstname: e.target.value })
        this.validator.showMessageFor('FirstName');
    }
    onLastname = (e) => {
        this.setState({ lastname: e.target.value })
        this.validator.showMessageFor('Lastname');
    }
    onPhonenumber = (e) => {
        this.setState({ phonenumber: e.target.value });
        this.validator.showMessageFor('Phonenumber');
    }
    onEmail = (e) => {
        this.setState({ email: e.target.value });
        this.validator.showMessageFor('Email');
    }
    onsmsnoti = () => {
        this.setState({ smsNotification: true });
    }
    onemailnoti = () => {
        this.setState({ emailNotification: true });
    }

    iseditnextmodaluser = () => {
        this.setState({ editusermodal: !this.state.editusermodal });
        this.setState({ nextedituser: !this.state.nextedituser });
        this.setState({ notitype: 'primarylocation' });
        this.props.iseditusermodal();
    }
    iscloseeditmodalsuser = () => {
        this.setState({ editusermodal: !this.state.editusermodal });
        this.setState({ nextedituser: !this.state.nextedituser });
    }

    iscloseeditmodalprilocsuser = () => {
        this.setState({ editprilocmodal: !this.setState.editprilocmodal });
        this.setState({ nexteditprimarylocation: !this.state.nexteditprimarylocation });
        this.props.iseditusermodal();
    }
    iseditnextprilocmodaluser = () => {
        this.setState({ editprilocmodal: !this.state.editprilocmodal });
        this.setState({ nexteditprimarylocation: !this.state.nexteditprimarylocation });
        this.setState({ notitype: 'editprimarylocation' });
    }
    iseditprilocmodaluser = () => {
        this.setState({ editprilocmodal: !this.state.editprilocmodal });        
    }
    toggle = () => {
        this.props.iseditusermodal();
    }
    nextuser = async() => {
        this.validator.showMessageFor('FirstName');
        this.validator.showMessageFor('Lastname')
        this.validator.showMessageFor('oraganizations')
        this.validator.showMessageFor('label');
        this.validator.showMessageFor('role');
        this.validator.showMessageFor('Email');
        this.validator.showMessageFor('Phonenumber');
        if (this.validator.allValid()) {
            let { fetchEditPrimaryLocation } = this.props;
            await fetchEditPrimaryLocation(this.state.oraganization.value, this.state.id);
            let data = {
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                phonenumber: this.state.phonenumber,
                label: this.state.label,
                email: this.state.email,
                role: this.state.role.value,
                entityId: this.state.oraganization.value,
                notifications: { 'email': this.state.emailNotification, 'phone': this.state.smsNotification },
                status: this.state.activeStatus,
            };
            this.setState({ userstepdata: data });
            this.setState({ editprilocmodal: !this.state.editprilocmodal });
            this.setState({ nextmodaluser: !this.state.nextmodaluser });
            this.setState({ addnextmodaluser: !this.state.addnextmodaluser });
            this.props.iseditusermodal();
        }
        this.props.shownoti('');
        this.setState({ notitype: 'editprimarylocation' });
    }
    locationData = (val) => {
        this.setState({ locationdata: val });
        let userstepdata = this.state.userstepdata;
        userstepdata.locations = val;
        var differences = diff(this.state.getEditData, userstepdata);
        var dif = { ...dif };
        if (differences) {
            differences.map((item, index) => {
                var value = item.rhs;
                dif[item.path[0]] = value;
            })
        }
        dif.id = this.state.id;
        dif.locations = val;
        const { updatedUserData } = this.props;
        updatedUserData(this.state.id, dif);
        this.props.shownoti('edituser');
    }

    render() {
        const { User } = this.props.data;
        const { Location } = this.props.data;
        let roleadduser = User.roleitem.rows && User.roleitem.rows.map(function (item) {
            return { value: item.id, label: item.name };
        })
        let oraguseritem = Location.orgnizationdata && Location.orgnizationdata.map(function (item) {
            return { value: item.id, label: item.name };
        })
        const { Status } = this.props.data;
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        {Status.status !== '' && Status.page === 'edituser' && this.props.notitype === 'edituser' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addusermodal} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.editusermodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Edit User</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="Firstname">First Name*</Label>
                                                <Input type='text' id="Firstname"
                                                    onChange={(e) => this.onFirstname(e)} value={this.state.firstname} />
                                                {this.validator.message('FirstName', this.state.firstname, 'required|alpha')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="lastname">Last Name*</Label>
                                                <Input type='text' id="lastname" onChange={(e) => this.onLastname(e)} value={this.state.lastname} />
                                                {this.validator.message('Lastname', this.state.lastname, 'required|alpha')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="role" placeholder='Select Roles'>Role*</Label>
                                                <Select
                                                    value={this.state.role}
                                                    onChange={(role) => this.setState({ role })}
                                                    options={roleadduser}
                                                />
                                                {this.validator.message('role', this.state.role, 'required')}

                                            </FormGroup>
                                        </Col>

                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="email">Email*</Label>
                                                <Input type='text' id="email" onChange={(e) => this.onEmail(e)} value={this.state.email} />
                                                {this.validator.message('Email', this.state.email, 'email|required')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="organization" placeholder='Select Organization'>Organization*</Label>
                                                <Select
                                                    value={this.state.oraganization}
                                                    onChange={(oraganization) => this.setState({ oraganization })}
                                                    options={oraguseritem}
                                                />
                                                {this.validator.message('oraganizations', this.state.oraganization, 'required')}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="phonenumber">Phone Number</Label>
                                                <Input type='text' id="phonenumber" onChange={(e) => this.onPhonenumber(e)} value={this.state.phonenumber} />
                                                {this.validator.message('Phonenumber', this.state.phonenumber, 'phone')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='3'>
                                            <FormGroup>
                                                <Label for="alerts">Alerts</Label>
                                                <br />
                                                <label style={{ cursor: 'pointer' }}>
                                                    <Checkbox
                                                        checked={this.state.emailNotification}
                                                        onChange={(e) => this.setState({ emailNotification: e.target.checked })}
                                                    />
                                                    &nbsp;Email
                                                    </label>&nbsp;&nbsp;&nbsp;
                                                    <label style={{ cursor: 'pointer' }}>
                                                    <Checkbox
                                                        checked={this.state.smsNotification}
                                                        onChange={(e) => this.setState({ smsNotification: e.target.checked })}
                                                        disabled={this.state.phonenumber === '' ? true : false}
                                                    />&nbsp;SMS
                                                    </label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" onClick={() => this.toggle()}>Cancel</Button>
                                <Button color="success" onClick={() => this.nextuser()}>Next</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        {this.state.editprilocmodal && <Editprimarylocation shownoti={this.shownoti} notitype={this.state.notitype} requiredMessage={this.state.requiredMessage} editprilocmodal={this.state.editprilocmodal} iseditnextprilocmodaluser={this.iseditnextprilocmodaluser} iscloseeditmodalprilocsuser={this.iscloseeditmodalprilocsuser} iseditprilocmodaluser={this.iseditprilocmodaluser} entityId={this.state.userstepdata.entityId} editid={this.state.id} locationData={this.locationData} />}
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    data: state,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchroleitemdata: fetchroleitemdata,
    fetchorganizationdata: fetchorganizationdata,
    updatedUserData: updatedUserData,
    fetchEditPrimaryLocation: fetchEditPrimaryLocation,

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edituser);