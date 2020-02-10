import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertytypesdata, add_property } from '../../services/Location'
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
import Select from 'react-select';
// import Autocomplete from 'react-google-autocomplete';
import Map from '../../library/map';
// import LocationSearchInput from './placeautocomplete';

class AddProperty extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        addlocationmodal: false,
        addorganizationmodal: false,
        addpropertymodal: false,
        orgnization: '',
        propertytype: '',
        selectedPlace: {},
        postal_code : 0,
    };

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertytypesdata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata();
        fetchlocationtypesdata();
        fetchpropertytypesdata();
    };

    getSelectedPlace = (val) => {
        this.setState({ selectedPlace: val });
        this.setState({postal_code: val.postal_code})
    }

    onSave = () => {
        let selectedPlace = this.state.selectedPlace;
        selectedPlace.orgnization = this.state.orgnization.value;
        selectedPlace.propertytype = this.state.propertytype.value;
        selectedPlace.label = this.state.label;
        const {add_property} = this.props;
        this.props.isaddpropertymodal(!this.props.addpropertymodal);
        console.log("property::", selectedPlace);
        // add_property(selectedPlace);
        
    }


    toggle = () => {
        this.props.isaddpropertymodal(!this.props.addpropertymodal);
    }

    render() {
        const { Location } = this.props.data;
        let orgnizationdata = Location.orgnizationdata.map(function (item) {
            return { value: item.id, label: item.name };
        })
        let propertytypedata = Location.propertytype.map(function (item) {
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

                        <Modal isOpen={this.props.addpropertymodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Add Property</ModalHeader>
                            <ModalBody style={{ overflow: 'auto' }}>
                                <p><a href='#' >Add Property </a> / New Property</p>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="organization">Organization *</Label>
                                                <Select
                                                    value={this.state.orgnization}
                                                    onChange={(orgnization) => this.setState({ orgnization })}
                                                    options={orgnizationdata}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="label">Label*</Label>
                                                <Input type="text" id='label' onChange={(e) => this.setState({label: e.target.value})} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="type">Type</Label>
                                                <Select
                                                    value={this.state.propertytype}
                                                    onChange={(propertytype) => this.setState({ propertytype })}
                                                    options={propertytypedata}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="postal_code">Postal Code</Label>
                                                <Input type='text' value={this.state.postal_code !== 0 ? this.state.postal_code : ''} readOnly="readOnly" name="postal_code" className="form-control" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    {/* <LocationSearchInput />   */}
                                    <Row style={{ marginBottom: '5em' }}>
                                        <Col md='12'> <Label for="search">Search Location For Property</Label></Col>
                                    </Row>
                                    <Map
                                        google={this.props.google}
                                        center={{ lat: 18.5204, lng: 73.8567 }}
                                        height='300px'
                                        zoom={15}
                                        getSelectedPlace = {this.getSelectedPlace}
                                    />
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" onClick={() => this.toggle()}>Cancel</Button>
                                <Button color="dark" onClick={() => this.onSave()}>Save</Button>{' '}
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
    fetchlocationitemdata: fetchlocationitemdata,
    fetchorganizationdata: fetchorganizationdata,
    fetchlocationtypesdata: fetchlocationtypesdata,
    fetchpropertytypesdata: fetchpropertytypesdata,
    add_property:add_property,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProperty);


