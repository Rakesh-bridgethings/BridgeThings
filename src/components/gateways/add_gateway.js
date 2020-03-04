import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import 'rc-checkbox/assets/index.css';
import { fetchlocationdata } from '../../services/IOTDevice';
import { fetchorganizationdata } from '../../services/Location';
import { fetchGatwayTypeData, addGateway } from '../../services/Gateway';
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

class AddGateway extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        })
    }
    state = {
        organization: '',
        location: '',
        gatewaytype: '',
        label: '',
        gatewayId: '',
    }

    componentDidMount = async () => {
        const { fetchorganizationdata, fetchGatwayTypeData } = this.props;
        await fetchorganizationdata();
        await fetchGatwayTypeData();
    }

    toggle = () => {
        this.props.isaddgatewaymodalcancle();
    }

    onChangeOrg = async (organization) => {
        this.setState({ organization });
        const { fetchlocationdata } = this.props;
        await fetchlocationdata(organization.value);
        this.setState({ location: '' })
    }

    onSave = async () => {
        this.validator.showMessageFor('organization');
        this.validator.showMessageFor('location');
        this.validator.showMessageFor('deviceid');
        this.validator.showMessageFor('devicetype');
        this.validator.showMessageFor('application');
        this.validator.showMessageFor('dutycyclemin');
        this.validator.showMessageFor('deviceprofile');
        if (this.validator.allValid()) {
            let data = { "label": this.state.label, "gatewayId": this.state.gatewayId, "gatewayType": { "id": this.state.gatewaytype.value }, "locations": { "id": this.state.location.value }, "entities": { "id": this.state.organization.value } };
            const { addGateway } = this.props;
            await addGateway(data);
            this.props.isaddgatewaymodal();
        }
    }

    render() {
        const { IOTDevice, Location, Status, Gateways } = this.props.data;
        let orgnizationdata = Location.orgnizationdata.map(function (item) {
            return { value: item.id, label: item.name };
        })
        let locationdata = IOTDevice.locationdata && IOTDevice.locationdata.map(function (item) {
            return { value: item.id, label: item.value };
        })
        let gatewaytypedata = Gateways.gatewaytypedata && Gateways.gatewaytypedata.map(function (item) {
            return { value: item.id, label: item.value };
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
                        {Status.status !== '' && Status.page === 'addgateway' && this.props.notitype === 'addgateway' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addusermodal} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.addgatewaymodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Add Gateway</ModalHeader>
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
                                                    placeholder='Select Organization'
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
                                                    placeholder='Select Location'
                                                />
                                                {this.validator.message('location', this.state.location, 'required')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="Firstname">GatewayType *</Label>
                                                <Select
                                                    value={this.state.gatewaytype}
                                                    onChange={(gatewaytype) => this.setState({ gatewaytype })}
                                                    options={gatewaytypedata}
                                                    placeholder='Select Gateways Type'
                                                />
                                                {this.validator.message('gatewaytype', this.state.gatewaytype, 'required')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="label">Label *</Label>
                                                <Input type='text' id="label"
                                                    onChange={(e) => this.setState({ label: e.target.value })} value={this.state.label} placeholder='Label' />
                                                {this.validator.message('label', this.state.label, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="gatewayId">GateWayId *</Label>
                                                <Input type='text' id="gatewayId"
                                                    onChange={(e) => this.setState({ gatewayId: e.target.value })} value={this.state.gatewayId} placeholder='GateWayId' />
                                                {this.validator.message('gatewayId', this.state.gatewayId, 'required')}
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
    fetchGatwayTypeData: fetchGatwayTypeData,
    addGateway: addGateway,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddGateway);