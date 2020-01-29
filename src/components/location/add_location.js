import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, business_hours, fetchpropertydata } from '../../services/Location'
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
import AddOrganization from './add_organization';
import AddProperty from './add_property';
import BusinessHours from './business_hours';
// import SelectSearch from 'react-select-search'
import Select from 'react-select';

class AddLocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        addlocationmodal: false,
        addorgmodal: false,
        addpropertymodal: false,
        nextmodal: false,
        addnextmodal: false,
        business_hours: [],
        zone: '',
        aggregationid: '',
        organization: '',
        property: '',
        locationtype: '',
        label: '',
        firststepData: [],
        nextclick: false,
        errorClass: 'is-invalid',
    };

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertydata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata();
        fetchlocationtypesdata();
        fetchpropertydata();
    }

    toggle = () => {
        this.props.isaddlocatiionmodal();
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

    isclosemodals = () => {
        this.setState({ addnextmodal: !this.state.addnextmodal });
        this.setState({ nextmodal: !this.state.nextmodal });
    }

    next = () => {
        if(this.state.organization !== '' && this.state.property !== '' && this.state.locationtype !== '' && this.state.label !== '') {
            this.setState({ nextmodal: !this.state.nextmodal });
            this.setState({ addnextmodal: !this.state.addnextmodal });            
            this.props.isaddlocatiionmodal();
            let data = [{
                zone: this.state.zone,
                aggregationid: this.state.aggregationid,
                organization: this.state.organization,
                property: this.state.property,
                locationtype: this.state.locationtype,
                label: this.state.label,
            }];
            this.setState({ firststepData: data });
        }
        this.setState({ nextclick: true });
    }

    business_hrsdata = (val) => {
        this.setState({ business_hours: val });
        let firststepData = this.state.firststepData;        
        var alldata = [...firststepData, ...val];
        business_hours(alldata);
    }


    render() {
        const { Location } = this.props.data;
        let orgnizationdata = Location.orgnizationdata.map(function (item) {
            return { value: item.id, label: item.name };
        })
        let propertydata = Location.property.map(function (item) {
            return { value: item.id, label: item.value };
        })
        let locationdata = Location.locationtypes.map(function (item) {
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
                        <Modal isOpen={this.props.addlocationmodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Add Location</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="zone">Zone</Label>
                                                <Input type='text' id="zone" onChange={(e) => this.setState({ zone: e.target.value })} />
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="aggregation_id">Aggregation ID</Label>
                                                <Input type='text' id="aggregation_id" onChange={(e) => this.setState({ aggregationid: e.target.value })} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="organization">Organization *</Label>
                                                <Select
                                                    value={this.state.organization}
                                                    onChange={(organization) => this.setState({ organization })}
                                                    options={orgnizationdata}
                                                />
                                                {/* <select name="select" id="organization" 
                                                    className={`form-control ${this.state.nextclick && this.state.organization === '' && this.state.errorClass}`}
                                                    onChange={(e) => this.setState({ organization: e.target.value })}>
                                                    <option value='' selected>Select Organization</option>
                                                    {Location.orgnizationdata && Location.orgnizationdata.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.id}>{item.name}</option>
                                                        )
                                                    })}
                                                </select> */}
                                                {/* <SelectSearch options={Location.orgnizationdata} value="id" name="name" placeholder="Select Organization" /> */}
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ addorgmodal: true })} ><i className="pe-7s-plus"> </i> Add New Organization</a>
                                            </FormGroup>
                                        </Col>
                                        {this.state.addorgmodal &&
                                            <AddOrganization addorgmodal={this.state.addorgmodal} isaddorgmodal={this.isaddorgmodal} />
                                        }
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="property">Property *</Label>
                                                <Select
                                                    value={this.state.property}
                                                    onChange={(property) => this.setState({ property })}
                                                    options={propertydata}
                                                />
                                                {/* <SelectSearch options={Location.property} value="id" name="name" placeholder="Select Property" /> */}
                                                {/* <select name="select" id="property" className="form-control" 
                                                className={`form-control ${this.state.nextclick && this.state.property === '' && this.state.errorClass}`}
                                                onChange={(e) => this.setState({ property: e.target.value })}>
                                                    <option value='' selected>Select Property</option>
                                                    {Location.property && Location.property.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.id}>{item.value}</option>
                                                        )
                                                    })}
                                                </select> */}
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ addpropertymodal: !this.state.addpropertymodal })} ><i className="pe-7s-plus"> </i> Add New Property</a>
                                            </FormGroup>
                                        </Col>
                                        {this.state.addpropertymodal &&
                                            <AddProperty addpropertymodal={this.state.addpropertymodal} isaddpropertymodal={this.isaddpropertymodal} />
                                        }
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="location_types">Location Type*</Label>                                                
                                                <Select
                                                    value={this.state.locationtype}
                                                    onChange={(locationtype) => this.setState({ locationtype })}
                                                    options={locationdata}
                                                />
                                                {/* <select name="select" id="location_types" className="form-control" 
                                                className={`form-control ${this.state.nextclick && this.state.locationtype === '' && this.state.errorClass}`}
                                                onChange={(e) => this.setState({ locationtype: e.target.value })}>
                                                    <option value='' selected>Select Location</option>
                                                    {Location.locationtypes && Location.locationtypes.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.id}>{item.value}</option>
                                                        )
                                                    })}
                                                </select> */}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="label">Label *</Label>
                                                <Input type='text' id='label' 
                                                className={`form-control ${this.state.nextclick && this.state.label === '' && this.state.errorClass}`}
                                                onChange={(e) => this.setState({ label: e.target.value })} />
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
                        {this.state.nextmodal && <BusinessHours addnextmodal={this.state.addnextmodal} isaddnextmodal={this.isaddnextmodal} isclosemodals={this.isclosemodals} business_hrsdata={this.business_hrsdata} />}
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
    business_hours: business_hours,
    fetchpropertydata: fetchpropertydata,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddLocation);


