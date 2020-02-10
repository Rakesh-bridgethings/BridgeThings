import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertytypesdata } from '../../services/Location'
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
import Select from 'react-select';
// import Autocomplete from 'react-google-autocomplete';
import Map from '~/library/map';
import LocationSearchInput from './placeautocomplete';

class EditProperty extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        editlocationmodal: false,
        editorganizationmodal: false,
        editpropertymodal: false,
        orgnization: '',
        propertytype: '',
    };

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertytypesdata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata();
        fetchlocationtypesdata();
        fetchpropertytypesdata();
    };




    toggle = () => {
        this.props.iseditpropertymodal(!this.props.editpropertymodal);
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

                        <Modal isOpen={this.props.editpropertymodal} toggle={() => this.toggle()} className={this.props.className} id='edit_location'>
                            <ModalHeader toggle={() => this.toggle()}>Edit Property</ModalHeader>
                            <ModalBody style={{overflow: 'auto'}}>
                                <p><a href='#' >Edit Property </a> / New Property</p>
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
                                                <Input type="text" id='label' />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="type">Type</Label>
                                                <Select
                                                    value={this.state.propertytype}
                                                    onChange={(propertytype) => this.setState({ propertytype })}
                                                    options={propertytypedata}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <LocationSearchInput />
                                    {/* <Map
                                    google={this.props.google}
                                    center={{lat: 18.5204, lng: 73.8567}}
                                    height='300px'
                                    zoom={15}
                                />       */}
                                                 

                                        {/* <Col md='6'>
                                            <FormGroup>
                                                <Label for="area">Area*</Label>                              
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="editress">Editress</Label>
                                                <Input type="text" id='editress' />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="city">City</Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="postal_code">PostalCode*</Label>
                                                <Input type="text" id='postal_code' />
                                            </FormGroup>
                                        </Col>
                                    </Row> */}
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" onClick={() => this.toggle()}>Cancel</Button>
                                <Button color="dark" onClick={() => this.toggle()}>Save</Button>{' '}
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
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProperty);


