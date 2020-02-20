import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { fetchroleitemdata, fechorganizationitemdata } from '../../services/User';
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
        nextclick: false,
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        role: '',
        oraganization: '',
        userstepdata:[],
        disabled: false,
        nextmodaluser: false,
        addnextmodaluser: false,
    }
    componentDidMount = async () => {
        const { fetchroleitemdata, fechorganizationitemdata } = this.props;
        await fetchroleitemdata();
        await fechorganizationitemdata();
    }
    componentWillReceiveProps = (props) => {

    }
    onChange(e) {
        console.log('Checkbox:', (e.target.checked));
    }
    onFirstname = (e) => {
        this.setState({ firstname: e.target.value })
        // this.validator.showMessageFor('FirstName');
    }
    onLastname = (e) => {
        this.setState({ lastname: e.target.value })
        // this.validator.showMessageFor('Lastname');

    }
    onPhonenumber = (e) => {
        this.setState({ phonenumber: e.target.value })
        // this.validator.showMessageFor('Phonenumber');
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
        this.validator.showMessageFor('Phonenumber');
        if (this.validator.allValid()) {
            this.setState({ nextmodaluser: !this.state.nextmodaluser });
            this.setState({ addnextmodaluser: !this.state.addnextmodaluser });
            this.props.isaddusermodal();
            let data = {
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                phonenumber:this.state.phonenumber,
                label: this.state.label,
                email:this.state.email,
                role:this.state.role,
                oraganization:this.state.oraganization,
            };
            this.setState({userstepdata:data});
                    this.props.shownoti('');
        this.setState({ notitype: 'primarylocation' });
        }
   
    }
    render() {
        const { User } = this.props.data;
        let roleadduser = User.roleitem.rows && User.roleitem.rows.map(function (item) {
            return { value: item.id, label: item.name };
        })
        let oraguseritem = User.oraganizationuseritem && User.oraganizationuseritem.map(function (item) {
            return { value: item.id, label: item.reference };
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
                                                    onChange={(e) => this.onFirstname(e)} value={this.state.firstname} />
                                                {this.validator.message('FirstName', this.state.firstname, 'required|alpha')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="lastname">Last Name*</Label>
                                                <Input type='text' id="lastname" onChange={(e) => this.onLastname(e)} value={this.state.lastname}/>
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
                                                <Input type='text' id="phonenumber" onChange={(e) => this.onPhonenumber(e)}   value={this.state.phonenumber} />
                                                {this.validator.message('Phonenumber', this.state.phonenumber, 'phone')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='3'>
                                            <FormGroup>
                                                <Label for="alerts">Alerts</Label>
                                                <br />
                                                <label>
                                                    <Checkbox
                                                        defaultChecked
                                                        onChange={(e) => this.onChange(e)}
                                                        disabled={this.state.disabled}
                                                    />
                                                    &nbsp;Email
                                                   {''}
                                                    <Checkbox
                                                        defaultChecked
                                                        onChange={(e) => this.onChange(e)}
                                                        disabled={this.state.disabled}
                                                    />SMS
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
                        {this.state.addnextmodaluser && <Primarylocation requiredMessage={this.props.requiredMessage} addnextmodaluser={this.state.addnextmodaluser} isaddnextmodaluser={this.isaddnextmodaluser} isclosemodalsuser={this.isclosemodalsuser} />}
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
    fechorganizationitemdata: fechorganizationitemdata

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Adduser);