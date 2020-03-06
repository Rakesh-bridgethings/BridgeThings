import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import 'rc-checkbox/assets/index.css';
import { fetchLocationData, fetchDeviceTypeData, fetchProfileData, addIotdevicesData, fetchApplicationData } from '../../services/IOTDevice';
import { fetchOrganizationData } from '../../services/Location';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup,
} from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../library/notification';

class AddIOTDevice extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        }, {autoForceUpdate: this})
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
        const { fetchOrganizationData, fetchDeviceTypeData, fetchProfileData } = this.props;
        await fetchOrganizationData();
        await fetchDeviceTypeData();
        await fetchProfileData();
    }

    toggle = () => {
        this.props.isaddiotdevicemodalcancle();
        this.setState({
            organization: '',
            location: '',
            deviceid: '',
            devicetype: '',
            application: '',
            dutycyclemin: '',
            deviceprofile: '',
        })
    }
    onChangeorg = async (organization) => {
        this.setState({ organization });
        const { fetchLocationData, fetchApplicationData } = this.props;
        await fetchLocationData(organization.value);
        await fetchApplicationData(organization.value);
        this.setState({ location: '', application: '' })
    }
    onSave = async () => {
        if (this.validator.allValid()) {
            let data = {
                'deviceId': this.state.deviceid,
                "deviceTypes": { "id": this.state.devicetype.value },
                "application": this.state.application.value,
                "dutyCycleMin": this.state.dutycyclemin,
                "locations": { "id": this.state.location.value },
                "deviceProfileType": this.state.deviceprofile.value
            }
            const { addIotdevicesData } = this.props;
            await addIotdevicesData(data);
            this.props.isaddiotdevicemodal();
            this.setState({
                organization: '',
                location: '',
                deviceid: '',
                devicetype: '',
                application: '',
                dutycyclemin: '',
                deviceprofile: '',
            })
        }  else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    render() {
        const { IOTDevice, Location, Status } = this.props.data;
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
                                                    onChange={(organization) => this.onChangeorg(organization)}
                                                    options={orgnizationdata}
                                                    placeholder="Select Organization"
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
                                                    placeholder="Select Locations"
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
                                                placeholder="Device Id"
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
                                                    placeholder="Select Device Type"
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
                                                    placeholder="Select Application"
                                                />
                                                {this.validator.message('application', this.state.application, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="lastname">Duty Cycle Min*</Label>
                                                <Input type='number' id="dutycyclemin"
                                                   placeholder="Duty Cycle Min"
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
                                                    placeholder="Select Device Profile"
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
    fetchOrganizationData: fetchOrganizationData,
    fetchLocationData: fetchLocationData,
    fetchProfileData: fetchProfileData,
    fetchDeviceTypeData: fetchDeviceTypeData,
    fetchApplicationData: fetchApplicationData,
    addIotdevicesData: addIotdevicesData,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddIOTDevice);