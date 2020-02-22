import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { fetchroleitemdata, fechorganizationitemdata, addUser } from '../../services/User';
import PageTitle from '../../components/includes/PageTitle';
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
import Primarylocation from './primarylocation';


class Adduser extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        })
    }
    state = {
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        role: '',
        oraganization: '',
        userstepdata: [],
        disabledSMS: true,
        nextmodaluser: false,
        addnextmodaluser: false,
        notificationEmail: false,
        notificationSMS: false,
    }
    componentDidMount = async () => {
        const { fetchroleitemdata, fechorganizationitemdata } = this.props;
        await fetchroleitemdata();
        await fechorganizationitemdata();
    }
    componentWillReceiveProps = (props) => {

    }
    onCheckedEmail(e) {
        this.setState({ notificationEmail: e.target.checked });
    }
    onCheckedSMS(e) {
        this.setState({ notificationSMS: e.target.checked });
    }

    onPhonenumber = (e) => {
        this.setState({ phonenumber: e.target.value })
        this.validator.showMessageFor('Phonenumber');        
    }
    onEmail = (e) => {
        this.setState({ email: e.target.value });
        this.validator.showMessageFor('Email');
    }
    isaddnextmodaluser = () => {
        this.setState({ addnextmodaluser: !this.state.addnextmodaluser });
        this.setState({ nextmodaluser: !this.state.nextmodaluser });
        this.setState({ notitype: 'primarylocation' });
        this.props.isaddusermodal();
    }

    isclosemodalsuser = () => {
        this.setState({ addnextmodaluser: !this.state.addnextmodaluser });
        this.setState({ nextmodaluser: !this.state.nextmodaluser });
    }
    toggle = () => {
        this.props.isaddusermodal();
    }
    nextuser = () => {
        this.validator.showMessageFor('FirstName');
        this.validator.showMessageFor('Lastname')
        this.validator.showMessageFor('oraganizations')
        this.validator.showMessageFor('label');
        this.validator.showMessageFor('role');
        this.validator.showMessageFor('Email');
        if (this.validator.allValid()) {
            this.setState({ nextmodaluser: !this.state.nextmodaluser });
            this.setState({ addnextmodaluser: !this.state.addnextmodaluser });
            this.props.isaddusermodal();
            let data = {
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                mobileNo: this.state.phonenumber,
                email: this.state.email,
                role: this.state.role.value,
                entityId: this.state.oraganization.value,
                notifications: { "email": this.state.notificationEmail, "phone": this.state.notificationSMS },
                status: 1,
            };
            this.setState({ userstepdata: data });
            this.setState({ notitype: 'primarylocation' });
        }
        this.props.shownoti('');
    }

    AdduserData = (value) => {
        let { addUser } = this.props;
        addUser(value);
        this.props.shownoti('adduser');
    }

    render() {
        const { User } = this.props.data;
        let roleadduser = User.roleitem.rows && User.roleitem.rows.map(function (item) {
            return { value: item.id, label: item.name };
        })
        let oraguseritem = User.oraganizationuseritem && User.oraganizationuseritem.map(function (item) {
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
                        {Status.status !== '' && Status.page === 'adduser' && this.props.notitype === 'adduser' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addusermodal} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.addusermodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Add User</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="Firstname">First Name*</Label>
                                                <Input type='text' id="Firstname"
                                                    onChange={(e) => this.setState({ firstname: e.target.value })} value={this.state.firstname} />
                                                {this.validator.message('FirstName', this.state.firstname, 'required|alpha_num')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="lastname">Last Name*</Label>
                                                <Input type='text' id="lastname" onChange={(e) => this.setState({ lastname: e.target.value })} value={this.state.lastname} />
                                                {this.validator.message('Lastname', this.state.lastname, 'required|alpha_num')}
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
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="alerts">Alerts</Label>
                                                <br />
                                                <label style={{ cursor: 'pointer' }}>
                                                    <Checkbox
                                                        checked={this.state.notificationEmail}
                                                        onChange={(e) => this.onCheckedEmail(e)}
                                                    // disabled={this.state.disabled}
                                                    />
                                                    &nbsp;Email
                                                    </label>&nbsp;&nbsp;&nbsp;
                                                    <label style={{ cursor: 'pointer' }}>
                                                    <Checkbox
                                                        checked={this.state.notificationSMS}
                                                        onChange={(e) => this.onCheckedSMS(e)}
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
                        {this.state.addnextmodaluser && <Primarylocation addUserData={this.state.userstepdata} requiredMessage={this.props.requiredMessage} addnextmodaluser={this.state.addnextmodaluser} isaddnextmodaluser={this.isaddnextmodaluser} isclosemodalsuser={this.isclosemodalsuser} AdduserData={this.AdduserData} />}
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
    fechorganizationitemdata: fechorganizationitemdata,
    addUser: addUser,

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Adduser);