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
import Select from 'react-select';
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({

})

class AddLocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        })
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
        const { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata();
        fetchlocationtypesdata();

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
        if (this.state.organization !== '' && this.state.property !== '' && this.state.locationtype !== '' && this.state.label !== '' && this.validator.allValid()) {
            this.setState({ nextmodal: !this.state.nextmodal });
            this.setState({ addnextmodal: !this.state.addnextmodal });
            this.props.isaddlocatiionmodal();
            let data = {
                zone: this.state.zone,
                aggregateId: this.state.aggregationid,
                entities: {
                    "id": this.state.organization.value
                },
                propertyId: this.state.property.value,
                label: this.state.label,
                locationType: this.state.locationtype.value, //{ id: this.state.locationtype.value, value: this.state.locationtype.label },    
                locationBusinessHoursList: [],
            };
            this.setState({ firststepData: data });
        }
        this.validator.showMessageFor('Zone');
        this.validator.showMessageFor('AggregationId');
        this.setState({ nextclick: true });
    }

    business_hrsdata = (val) => {
        this.setState({ business_hours: val });
        let firststepData = this.state.firststepData;
        firststepData.locationBusinessHoursList = val;
        const { business_hours } = this.props;
        let res = business_hours(firststepData);
        console.log("pp::", this.props, res);
        toast.success(this.props.data.Location.addedlocationmessage, {
            position: "top-right",
            autoClose: 12000,
            hideProgressBar: false,
            newestOnTop: false,
            // closeOnClick
            ltr: true,
            // pauseOnVisibilityChange
            // draggable
            pauseOnHover: true,
        });
    }

    onZone = (e) => {
        this.setState({ zone: e.target.value })
        this.validator.showMessageFor('Zone');
    }

    onAggregateId = (e) => {
        this.setState({ aggregationid: e.target.value });
        this.validator.showMessageFor('AggregationId');
    }

    onChngOrg = (organization) => {
        const { fetchpropertydata } = this.props;
        this.setState({ organization });
        fetchpropertydata(organization.value);
        // this.props.changeOrg(organization.value);
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
                        <ToastContainer />
                        <Modal isOpen={this.props.addlocationmodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Add Location</ModalHeader>
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
                                                />
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ addorgmodal: true })} ><i className="pe-7s-plus"> </i> Add New Organization</a>
                                                {this.state.nextclick && this.state.organization === '' && <div className='required_message'>{this.props.requiredMessage}</div>
                                                }
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
                                                />
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ addpropertymodal: !this.state.addpropertymodal })} ><i className="pe-7s-plus"> </i> Add New Property</a>
                                                {this.state.nextclick && this.state.property === '' && <div className='required_message'>{this.props.requiredMessage}</div>
                                                }
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
                                                />
                                                {this.state.nextclick && this.state.locationtype === '' && <div className='required_message'>{this.props.requiredMessage}</div>
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="label">Label *</Label>
                                                <Input type='text' id='label' value={this.state.label}
                                                    className={`form-control ${this.state.nextclick && this.state.label === '' && this.state.errorClass}`}
                                                    onChange={(e) => this.setState({ label: e.target.value })} />
                                                {this.state.nextclick && this.state.label === '' && <div className='required_message'>{this.props.requiredMessage}</div>
                                                }
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
                        {this.state.nextmodal && <BusinessHours requiredMessage={this.props.requiredMessage} addnextmodal={this.state.addnextmodal} isaddnextmodal={this.isaddnextmodal} isclosemodals={this.isclosemodals} business_hrsdata={this.business_hrsdata} />}
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


