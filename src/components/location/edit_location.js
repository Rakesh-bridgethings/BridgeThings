import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertydata, updatedLocationData } from '../../services/Location'
import PageTitle from '../includes/PageTitle';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button,
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';
// import EditOrganization from './edit_organization';
import AddProperty from './add_property';
import EditBusinessHours from './edit_business_hours';
import Select from 'react-select';
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../library/notification';
// import Getdiff from '../library/deepDiffMapper';
var diff = require('deep-diff').diff;


class EditLocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        })
    }

    state = {
        editlocationmodal: false,
        editorgmodal: false,
        editpropertymodal: false,
        nextmodal: false,
        editnextmodal: false,
        zone: '',
        aggregationid: '',
        organization: '',
        property: '',
        locationtype: '',
        label: '',
        firststepData: [],
        nextclick: false,
        errorClass: 'is-invalid',
        getEditBusiness: [],
        business_hours: [],
        editid: 0,
        entityReference: '',
        propertyName: '',
        updatedFields: {},
        getEditData: {},
        getEdittedData: {},
        propertydatalist: [],
    }

    componentWillReceiveProps = async (props) => {
        await this.setState({
            getEditBusiness: props.getEditData,
            zone: props.getEditData.zone,
            aggregationid: props.getEditData.aggregateId,
            organization: props.getEditData.entityId && { value: props.getEditData.entityId, label: props.getEditData.entityReference },
            property: props.getEditData.property && { value: props.getEditData.propertyId, label: props.getEditData.property },
            locationtype: props.getEditData.locationType && { value: props.getEditData.locationType.id, label: props.getEditData.locationType.value },
            label: props.getEditData.floor,
            editid: props.geteditid,
            entityReference: props.getEditData.entityReference,
            propertyName: props.getEditData.property,
            propertydatalist: props.getEditData.propertydatalist && props.getEditData.propertydatalist,
        });
        let updatedFields = this.state.updatedFields;
        updatedFields.id = props.geteditid;
        this.setState({ updatedFields });

        const getEditData = {
            id: this.props.geteditid,
            zone: this.props.getEditData.zone,
            aggregateId: this.props.getEditData.aggregateId,
            entities: this.props.getEditData.entityId && {
                "id": this.props.getEditData.entityId
            },
            propertyId: this.props.getEditData.property && this.props.getEditData.propertyId,
            floor: this.props.getEditData.floor,
            locationType: this.props.getEditData.locationType && this.props.getEditData.locationType.id,
            locationBusinessHoursList: this.props.getEditData.locationBusinessHoursList,
        };
        this.setState({ getEditData });
    }

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertydata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata();
        fetchlocationtypesdata();
        // fetchpropertydata();
        // const { fetchpropertydata } = this.props;

    }

    toggle = () => {
        this.props.iseditlocatiionmodal();
    }

    iseditpropertymodal = (val) => {
        this.setState({ editpropertymodal: val });
    }

    iseditorgmodal = (val) => {
        this.setState({ editorgmodal: val });
    }

    iseditnextmodal = () => {
        this.setState({ editnextmodal: !this.state.editnextmodal });
        this.setState({ nextmodal: !this.state.nextmodal });
        this.props.iseditlocatiionmodal();
    }

    isclosemodals = () => {
        this.setState({ editnextmodal: !this.state.editnextmodal });
        this.setState({ nextmodal: !this.state.nextmodal });
    }

    next = () => {
        this.validator.showMessageFor('organization');
        this.validator.showMessageFor('property')
        this.validator.showMessageFor('locationtype')
        this.validator.showMessageFor('label')
        if (this.validator.allValid()) {
            this.setState({ nextmodal: !this.state.nextmodal });
            this.setState({ editnextmodal: !this.state.editnextmodal });
            this.props.iseditlocatiionmodal();
            let getEdittedData = {
                id: this.state.editid,
                zone: this.state.zone,
                aggregateId: this.state.aggregationid,
                entities: {
                    "id": this.state.organization.value
                },
                propertyId: this.state.property.value,
                floor: this.state.label,
                locationType: this.state.locationtype.value,
                locationBusinessHoursList: [],
            };
            this.setState({ getEdittedData });
            this.props.shownoti('');
        }
        this.validator.showMessageFor('Zone');
        this.validator.showMessageFor('AggregationId');
        this.setState({ nextclick: true });
    }

    business_hrsdata = (val) => {
        this.setState({ business_hours: val });
        let updatedFields = this.state.updatedFields;
        updatedFields.locationBusinessHoursList = val;
        let getEdittedData = this.state.getEdittedData;
        getEdittedData.locationBusinessHoursList = val;
        var differences = diff(this.state.getEditData, getEdittedData);
        var dif = { ...dif };
        if (differences) {
            differences.map((item, index) => {
                var value = item.rhs;
                dif[item.path[0]] = value;
            })
        }
        dif.id = this.state.editid;
        dif.locationBusinessHoursList = val;
        const { updatedLocationData } = this.props;
        updatedLocationData(this.state.editid, dif);
        this.props.shownoti('update');
    }

    onZone = (e) => {
        this.setState({ zone: e.target.value })
        this.validator.showMessageFor('Zone');
        let updatedFields = this.state.updatedFields;
        updatedFields.zone = e.target.value;
        this.setState({ updatedFields });
    }

    onAggregateId = (e) => {
        this.setState({ aggregationid: e.target.value });
        this.validator.showMessageFor('AggregationId');
        let updatedFields = this.state.updatedFields;
        updatedFields.aggregateId = e.target.value;
        this.setState({ updatedFields });
    }

    // onChngOrg = async (organization) => {
    //     const { fetchpropertydata } = this.props;
    //     await fetchpropertydata(organization.value);
    //     let updatedFields = this.state.updatedFields;
    //     updatedFields.entityId = organization.value;
    //     updatedFields.entityReference = organization.label;
    //     this.setState({ updatedFields });
    //     this.setState({ property: '' });
    //     this.setState({ organization: organization });
    // }

    onChngproperty = (property) => {
        this.setState({ property });
        let updatedFields = this.state.updatedFields;
        updatedFields.propertyId = property.value;
        this.setState({ updatedFields });
    }

    onChngloctype = (locationtype) => {
        this.setState({ locationtype });
        let updatedFields = this.state.updatedFields;
        updatedFields.locationtype = locationtype.value; //{id: locationtype.value, value: locationtype.label};
        this.setState({ updatedFields });
    }

    onchnglabel = (e) => {
        this.setState({ label: e.target.value });
        let updatedFields = this.state.updatedFields;
        updatedFields.floor = e.target.value;
        this.setState({ updatedFields });
    }

    render() {
        const { Location } = this.props.data;
        let orgnizationdata = Location.orgnizationdata.map(function (item) {
            return { value: item.id, label: item.name };
        })
        let propertydata = this.props.getEditData.propertydatalist && this.props.getEditData.propertydatalist.map(function (item) {
            return { value: item.id, label: item.value };
        })
        let locationdata = Location.locationtypes.map(function (item) {
            return { value: item.id, label: item.value };
        })
        const orgStyles = {
            control: (base, state) => ({
                ...base,
                borderColor: this.state.nextclick && this.state.organization === '' ? '#C71C22' : '#ddd',
                '&:hover': {
                    borderColor: this.state.nextclick && this.state.organization === '' ? '#C71C22' : '#ddd'
                }
            })
        }
        const propertyStyles = {
            control: (base, state) => ({
                ...base,
                borderColor: this.state.nextclick && this.state.property === '' ? '#C71C22' : '#ddd',
                '&:hover': {
                    borderColor: this.state.nextclick && this.state.property === '' ? '#C71C22' : '#ddd'
                }
            })
        }
        const loctypeStyles = {
            control: (base, state) => ({
                ...base,
                borderColor: this.state.nextclick && this.state.locationtype === '' ? '#C71C22' : '#ddd',
                '&:hover': {
                    borderColor: this.state.nextclick && this.state.locationtype === '' ? '#C71C22' : '#ddd'
                }
            })
        }
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
                        {Status.status !== '' && Status.page === 'update' && this.props.notitype === 'update' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addlocationmodal} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.editlocationmodal} toggle={() => this.toggle()} className={this.props.className} id='edit_location'>
                            <ModalHeader toggle={() => this.toggle()}>Edit Location</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="zone">Zone</Label>
                                                <Input type='text' id="zone" onChange={(e) => this.onZone(e)} value={this.state.zone} />
                                                {this.validator.message('Zone', this.state.zone, 'alpha_num')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="aggregation_id">Aggregation ID</Label>
                                                <Input type='text' id="aggregation_id" onChange={(e) => this.onAggregateId(e)} value={this.state.aggregationid} />
                                                {this.validator.message('AggregationId', this.state.aggregationid, 'alpha_num')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="organization">Organization *</Label>
                                                <Select
                                                    value={this.state.organization}
                                                    styles={orgStyles}
                                                    onChange={(organization) => this.onChngOrg(organization)}
                                                    options={orgnizationdata}
                                                    isDisabled
                                                />
                                                <a style={{ cursor: 'pointer' }} ><i className="pe-7s-plus"> </i> Add New Organization</a>
                                                {this.validator.message('organization', this.state.organization, 'required')}
                                            </FormGroup>
                                        </Col>
                                        {/* {this.state.editorgmodal &&
                                            <EditOrganization requiredMessage={this.props.requiredMessage} editorgmodal={this.state.editorgmodal} iseditorgmodal={this.iseditorgmodal} />
                                        } */}
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="property">Property *</Label>
                                                <Select
                                                    value={this.state.property}
                                                    styles={propertyStyles}
                                                    onChange={(property) => this.onChngproperty(property)}
                                                    options={propertydata}
                                                />
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ editpropertymodal: !this.state.editpropertymodal })} ><i className="pe-7s-plus"> </i> Add New Property</a>
                                                {this.validator.message('property', this.state.property, 'required')}
                                            </FormGroup>
                                        </Col>
                                        {this.state.editpropertymodal &&
                                            // <EditProperty requiredMessage={this.props.requiredMessage} editpropertymodal={this.state.editpropertymodal} iseditpropertymodal={this.iseditpropertymodal} />
                                            <AddProperty requiredMessage={this.props.requiredMessage} addpropertymodal={this.state.editpropertymodal} isaddpropertymodal={this.iseditpropertymodal} />
                                        }
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="location_types">Location Type*</Label>
                                                <Select
                                                    value={this.state.locationtype}
                                                    styles={loctypeStyles}
                                                    onChange={(locationtype) => this.onChngloctype(locationtype)}
                                                    options={locationdata}
                                                />
                                                {this.validator.message('locationtype', this.state.locationtype, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="label">Label *</Label>
                                                <Input type='text' id='label' value={this.state.label}
                                                    className={`form-control ${this.state.nextclick && this.state.label === '' && this.state.errorClass}`}
                                                    onChange={(e) => this.onchnglabel(e)} />
                                                {this.validator.message('label', this.state.label, 'required')}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" onClick={() => this.toggle()}>Cancel</Button>
                                <Button color="success" onClick={() => this.next()}>Next</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        {this.state.nextmodal && <EditBusinessHours requiredMessage={this.props.requiredMessage} getEditBusiness={this.state.getEditBusiness} editnextmodal={this.state.editnextmodal} iseditnextmodal={this.iseditnextmodal} isclosemodals={this.isclosemodals} business_hrsdata={this.business_hrsdata} />}
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
    fetchlocationitemdata: fetchlocationitemdata,
    fetchorganizationdata: fetchorganizationdata,
    fetchlocationtypesdata: fetchlocationtypesdata,
    fetchpropertydata: fetchpropertydata,
    updatedLocationData: updatedLocationData,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditLocation);


