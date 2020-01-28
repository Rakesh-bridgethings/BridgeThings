import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertytypesdata } from '../../services/Location'
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

class AddLocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        addlocationmodal: false,
        addorganizationmodal: false,
        addpropertymodal: false,
    };

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchpropertytypesdata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata();
        fetchlocationtypesdata();
        fetchpropertytypesdata();
    }

    toggle = () => {
        this.props.isaddpropertymodal(!this.props.addpropertymodal);
    }

    render() {
        const { Location } = this.props.data;
        console.log("property::", Location);
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
                            <ModalBody>
                                <p><a href='#' >Add Property </a> / New Property</p>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="organization">Organization *</Label>
                                                <select name="select" id="organization" className="form-control">
                                                    {Location.orgnizationdata && Location.orgnizationdata.map((item, index) => {
                                                        return (
                                                            <option value={item.id}>{item.name}</option>
                                                        )
                                                    })}
                                                </select>
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
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="type">Type</Label>
                                                <select name="select" id="type" className="form-control">
                                                    {Location.propertytype && Location.propertytype.map((item, index) => {
                                                        return (
                                                            <option value={item.id}>{item.value}</option>
                                                        )
                                                    })}
                                                </select>
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="area">Area*</Label>
                                                <Input type="text" id='area' />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="address">Address</Label>
                                                <Input type="text" id='address' />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="city">City</Label>
                                                <select name="select" id="city" className="form-control">
                                                    {Location.propertytype && Location.propertytype.map((item, index) => {
                                                        return (
                                                            <option value={item.id}>{item.value}</option>
                                                        )
                                                    })}
                                                </select>
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="postal_code">PostalCode*</Label>
                                                <Input type="text" id='postal_code' />
                                            </FormGroup>
                                        </Col>
                                    </Row>

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
)(AddLocation);


