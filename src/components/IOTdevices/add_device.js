import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { fetchlocationdata, fetchdevicetypedata, fetchdeviceprofiledata, add_iotdevices } from '../../services/IOTDevice';
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

class AddIOTDevice extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        })
    }
    state = {
        organization: '',
        location: '',
        deviceid: '',
        devicetype: '',
        application: '',
        dutycyclemin: '',
        deviceprofile: '',
    }

    componentDidMount = async () => {
        const { fetchorganizationdata, fetchdevicetypedata, fetchdeviceprofiledata } = this.props;
        await fetchorganizationdata();
        await fetchdevicetypedata();
        await fetchdeviceprofiledata();
    }

    toggle = () => {
        this.props.isaddiotdevicemodalcancle();
    }

    onChangeOrg = async(organization) => {
        this.setState({ organization });
        const { fetchlocationdata } = this.props;
        await fetchlocationdata(organization.value);
        this.setState({ location: '', application: ''})
    }

    onSave = async() => {
        this.validator.showMessageFor('organization');
        this.validator.showMessageFor('location');
        this.validator.showMessageFor('deviceid');
        this.validator.showMessageFor('devicetype');
        this.validator.showMessageFor('application');
        this.validator.showMessageFor('dutycyclemin');
        this.validator.showMessageFor('deviceprofile');
        if (this.validator.allValid()) {
            let data = {
                'deviceId': this.state.deviceid,
                "deviceTypes":{"id":this.state.devicetype.value},
                "application":this.state.application.value,
                "dutyCycleMin":this.state.dutycyclemin,
                "locations":{"id":this.state.location.value},
                "deviceProfileType":this.state.deviceprofile.value
            }
            const { add_iotdevices } = this.props;
            await add_iotdevices(data);
            this.props.isaddiotdevicemodal();
        }
    }

    render() {
        const { IOTDevice } = this.props.data;
        const { Location } = this.props.data;
        const { Status } = this.props.data;
        let orgnizationdata = Location.orgnizationdata.map(function (item) {
            return { value: item.id, label: item.name };
        })
        let locationdata = IOTDevice.locationdata && IOTDevice.locationdata.map(function (item) {
            return { value: item.id, label: item.value };
        })
        let applicationdata = IOTDevice.applicationdata && IOTDevice.applicationdata.map(function (item) {
            return { value: item.reference, label: item.value };
        })
        let devicetypedata = IOTDevice.devicetypedata && IOTDevice.devicetypedata.map(function (item) {
            return { value: item.id, label: item.value };
        })
        let deviceprofiledata = IOTDevice.deviceprofiledata && IOTDevice.deviceprofiledata.map(function (item) {
            return { value: item, label: item };
        })
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
                        {Status.status !== '' && Status.page === 'adddevice' && this.props.notitype === 'adddevice' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addusermodal} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.adddevicemodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Add IOT Device</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="Firstname">Organization*</Label>
                                                <Select
                                                    value={this.state.organization}
                                                    onChange={(organization) => this.onChangeOrg(organization)}
                                                    options={orgnizationdata}
                                                />
                                                {this.validator.message('organization', this.state.organization, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="lastname">Locations*</Label>
                                                <Select
                                                    value={this.state.location}
                                                    onChange={(location) => this.setState({ location })}
                                                    options={locationdata}
                                                />
                                                {this.validator.message('location', this.state.location, 'required')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="Firstname">DeviceId *</Label>
                                                <Input type='text' id="deviceid"
                                                    onChange={(e) => this.setState({ deviceid: e.target.value })} value={this.state.deviceid} />
                                                {this.validator.message('deviceid', this.state.deviceid, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="lastname">Device Type*</Label>
                                                <Select
                                                    value={this.state.devicetype}
                                                    onChange={(devicetype) => this.setState({ devicetype })}
                                                    options={devicetypedata}
                                                />
                                                {this.validator.message('devicetype', this.state.devicetype, 'required')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="lastname">Application*</Label>
                                                <Select
                                                    value={this.state.application}
                                                    onChange={(application) => this.setState({ application })}
                                                    options={applicationdata}
                                                />
                                                {this.validator.message('application', this.state.application, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="lastname">Duty Cycle Min*</Label>
                                                <Input type='number' id="dutycyclemin"
                                                    onChange={(e) => this.setState({ dutycyclemin: e.target.value })} value={this.state.dutycyclemin} />
                                                {this.validator.message('dutycyclemin', this.state.dutycyclemin, 'required|numeric')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="lastname">Device Profile*</Label>
                                                <Select
                                                    value={this.state.deviceprofile}
                                                    onChange={(deviceprofile) => this.setState({ deviceprofile })}
                                                    options={deviceprofiledata}
                                                />
                                                {this.validator.message('deviceprofile', this.state.deviceprofile, 'required')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" onClick={() => this.toggle()}>Cancel</Button>
                                <Button color="success" onClick={() => this.onSave()}>Save</Button>{' '}
                            </ModalFooter>
                        </Modal>
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
    fetchorganizationdata: fetchorganizationdata,
    fetchlocationdata: fetchlocationdata,
    fetchdeviceprofiledata: fetchdeviceprofiledata,
    fetchdevicetypedata: fetchdevicetypedata,
    add_iotdevices: add_iotdevices,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddIOTDevice);