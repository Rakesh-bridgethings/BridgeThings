import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, business_hours, fetchpropertydata } from '../../services/Location'
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
import EditOrganization from './edit_organization';
import EditProperty from './edit_property';
import BusinessHours from './business_hours';
// import SelectSearch from 'react-select-search'
import Select from 'react-select';

class EditLocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        editlocationmodal: false,
        editorgmodal: false,
        editpropertymodal: false,
        nextmodal: false,
        editnextmodal: false,
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

    componentWillReceiveProps = (props) => {
        console.log("pp::", this.props.getEditData);
        // this.setState ({
        //     zone: this.props.getEditData.zone,
        //     aggregationid: this.props.getEditData.aggregationid,
        //     organization: this.props.getEditData.entityId,
        //     property: this.props.getEditData.propertyId,
        //     locationtype: this.props.getEditData.locationType && this.props.getEditData.locationType.id,
        //     label: this.props.getEditData.floor,
        // })
    }

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertydata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata();
        fetchlocationtypesdata();
        fetchpropertydata();
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
        if(this.state.organization !== '' && this.state.property !== '' && this.state.locationtype !== '' && this.state.label !== '') {
            this.setState({ nextmodal: !this.state.nextmodal });
            this.setState({ editnextmodal: !this.state.editnextmodal });            
            this.props.iseditlocatiionmodal();
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
                        <Modal isOpen={this.props.editlocationmodal} toggle={() => this.toggle()} className={this.props.className} id='edit_location'>
                            <ModalHeader toggle={() => this.toggle()}>Edit Location</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="zone">Zone</Label>
                                                <Input type='text' id="zone" onChange={(e) => this.setState({ zone: e.target.value })} value={this.state.zone} />
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="aggregation_id">Aggregation ID</Label>
                                                <Input type='text' id="aggregation_id" onChange={(e) => this.setState({ aggregationid: e.target.value })} value={this.state.aggregationid} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="organization">Organization *</Label>
                                                <Select
                                                    value={this.state.organization}
                                                    styles = {orgStyles}
                                                    onChange={(organization) => this.setState({ organization })}
                                                    options={orgnizationdata}
                                                />                                               
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ editorgmodal: true })} ><i className="pe-7s-plus"> </i> Edit New Organization</a>
                                            </FormGroup>
                                        </Col>
                                        {this.state.editorgmodal &&
                                            <EditOrganization editorgmodal={this.state.editorgmodal} iseditorgmodal={this.iseditorgmodal} />
                                        }
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="property">Property *</Label>
                                                <Select
                                                    value={this.state.property}
                                                    styles = {propertyStyles}
                                                    onChange={(property) => this.setState({ property })}
                                                    options={propertydata}
                                                />
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ editpropertymodal: !this.state.editpropertymodal })} ><i className="pe-7s-plus"> </i> Edit New Property</a>
                                            </FormGroup>
                                        </Col>
                                        {this.state.editpropertymodal &&
                                            <EditProperty editpropertymodal={this.state.editpropertymodal} iseditpropertymodal={this.iseditpropertymodal} />
                                        }
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="location_types">Location Type*</Label>                                                
                                                <Select
                                                    value={this.state.locationtype}
                                                    styles = {loctypeStyles}                                                    
                                                    onChange={(locationtype) => this.setState({ locationtype })}
                                                    options={locationdata}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="label">Label *</Label>
                                                <Input type='text' id='label' value={this.state.label}
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
                        {this.state.nextmodal && <BusinessHours editnextmodal={this.state.editnextmodal} iseditnextmodal={this.iseditnextmodal} isclosemodals={this.isclosemodals} business_hrsdata={this.business_hrsdata} />}
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
)(EditLocation);


