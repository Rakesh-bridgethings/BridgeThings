import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOrganizationData, fetchLocationTypesData, addLocation, fetchPropertyData } from '../../services/Location'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup} from 'reactstrap';
import AddOrganization from './add_organization';
import AddProperty from './add_property';
import BusinessHours from './business_hours';
import Select from 'react-select';
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../library/notification';
class AddLocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        })
    }
    state = {
        addorgmodal: false,
        addpropertymodal: false,
        nextmodal: false,
        addnextmodal: false,
        business_hours: [],
        organization: '',
        property: '',
        locationtype: '',
        label: '',
        firststepData: [],
        nextclick: false,
        page: '',
    };
    componentDidMount = async () => {
        const { fetchOrganizationData, fetchLocationTypesData } = this.props;
        fetchOrganizationData();
        fetchLocationTypesData();
    }
    toggle = () => {
        this.props.isaddlocatiionmodal();
        this.setState({
            organization: '',
            property: '',
            locationtype: '',
            label: '',
        })
    }

    isaddpropertymodal = (val) => {
        this.setState({ addpropertymodal: val });
    }

    isaddorgmodal = (val) => {
        this.setState({ addorgmodal: val });
    }
    isaddnextmodal = () => {
        this.setState({ addnextmodal: !this.state.addnextmodal });
        this.setState({ nextmodal: !this.state.nextmodal });
        this.props.isaddlocatiionmodal();
    }
    isaddmodacancle = () => {
        this.setState({ nextmodal: !this.state.nextmodal });
        this.setState({ addnextmodal: !this.state.addnextmodal });
    }
    isclosemodals = () => {
        this.setState({ addnextmodal: !this.state.addnextmodal });
        this.setState({ nextmodal: !this.state.nextmodal });
    }
    next = () => {
        this.validator.showMessageFor('organization');
        this.validator.showMessageFor('property');
        this.validator.showMessageFor('locationtype');
        this.validator.showMessageFor('label');
        this.validator.showMessageFor('Zone');
        this.validator.showMessageFor('AggregationId');
        if (this.validator.allValid()) {
            this.setState({ nextmodal: !this.state.nextmodal });
            this.setState({ addnextmodal: !this.state.addnextmodal });
            this.props.isaddlocatiionmodal();
            let data = {              
                entities: {
                    "id": this.state.organization.value
                },
                propertyId: this.state.property.value,
                label: this.state.label,
                locationType: this.state.locationtype.value,    
                locationBusinessHoursList: [],
            };
            this.setState({ firststepData: data });

        }
        this.setState({ nextclick: true });
        this.setState({
            organization: '',
            property: '',
            locationtype: '',
            label: '',
        })
        this.props.shownoti('');
    }
    business_hours = (val) => {
        this.setState({ business_hours: val });
        let firststepData = this.state.firststepData;
        firststepData.locationBusinessHoursList = val;
        const { addLocation } = this.props;
        addLocation(firststepData);
        this.setState({ organization: '', property: '', locationtype: '', label: '', nextclick: false });
        this.props.shownoti('addlocation');
    }

    onChngOrg = (organization) => {
        const { fetchPropertyData } = this.props;
        this.setState({ organization, property: '' });
        fetchPropertyData(organization.value);
        // this.props.changeOrg(organization.value);
    }

    render() {
        const { Location, Status } = this.props.data;
        let orgnizationdata = Location.orgnizationdata.map(function (item) {
            return { value: item.id, label: item.name };
        })
        let propertydata = Location.propertydata.map(function (item) {
            return { value: item.id, label: item.value };
        })
        let locationdata = Location.locationtypedata.map(function (item) {
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
                        {Status.status !== '' && Status.page === 'addlocation' && this.props.notitype === 'addlocation' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addlocationmodal} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.addlocationmodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Add Location</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="organization">Organization *</Label>
                                                <Select
                                                    value={this.state.organization}
                                                    styles={orgStyles}
                                                    onChange={(organization) => this.onChngOrg(organization)}
                                                    options={orgnizationdata}
                                                    placeholder="Select Organization"
                                                />
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ addorgmodal: true })} ><i className="pe-7s-plus"> </i> Add New Organization</a>
                                                {this.validator.message('organization', this.state.organization, 'required')}
                                            </FormGroup>
                                        </Col>
                                        {this.state.addorgmodal &&
                                            <AddOrganization requiredMessage={this.props.requiredMessage} addorgmodal={this.state.addorgmodal} isaddorgmodal={this.isaddorgmodal} />
                                        }
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="property">Property *</Label>
                                                <Select
                                                    value={this.state.property}
                                                    styles={propertyStyles}
                                                    onChange={(property) => this.setState({ property })}
                                                    options={propertydata}
                                                    placeholder="Select property"
                                                />
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ addpropertymodal: !this.state.addpropertymodal })} ><i className="pe-7s-plus"> </i> Add New Property</a>
                                                {this.validator.message('property', this.state.property, 'required')}
                                            </FormGroup>
                                        </Col>
                                        {this.state.addpropertymodal &&
                                            <AddProperty requiredMessage={this.props.requiredMessage} addpropertymodal={this.state.addpropertymodal} isaddpropertymodal={this.isaddpropertymodal} />
                                        }
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="location_types">Location Type*</Label>
                                                <Select
                                                    value={this.state.locationtype}
                                                    styles={loctypeStyles}
                                                    onChange={(locationtype) => this.setState({ locationtype })}
                                                    options={locationdata}
                                                    placeholder="Select Location Type"
                                                />
                                                {this.validator.message('locationtype', this.state.locationtype, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="label">Label *</Label>
                                                <Input type='text' id='label'  placeholder="label" value={this.state.label}
                                                    className='form-control'
                                                    onChange={(e) => this.setState({ label: e.target.value })} />
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
                        {this.state.nextmodal && <BusinessHours requiredMessage={this.props.requiredMessage} addnextmodal={this.state.addnextmodal} isaddnextmodal={this.isaddnextmodal} isclosemodals={this.isclosemodals} business_hours={this.business_hours} isaddmodacancle={this.isaddmodacancle}/>}
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
    // fetchLocationItemData: fetchLocationItemData,
    fetchOrganizationData: fetchOrganizationData,
    fetchLocationTypesData: fetchLocationTypesData,
    addLocation: addLocation,
    fetchPropertyData: fetchPropertyData,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddLocation);


