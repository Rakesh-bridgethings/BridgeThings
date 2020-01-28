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
        this.setState({ nextmodal: !this.state.nextmodal });
        this.setState({ addnextmodal: !this.state.addnextmodal });
        this.props.isaddlocatiionmodal();
    }

    // isaddlocatiionmodal = () => {
    //     this.setState({addlocationmodal: !this.props.addlocationmodal});
    // }

    business_hrsdata = (val) => {
        this.setState({ business_hours: val });
        business_hours(val);
    }

    render() {
        const { Location } = this.props.data;
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
                                                <Input type='text' id="zone" />
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="aggregation_id">Aggregation ID</Label>
                                                <Input type='text' id="aggregation_id" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="organization">Organization *</Label>
                                                <select name="select" id="organization" className="form-control">
                                                    {Location.orgnizationdata && Location.orgnizationdata.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.id}>{item.name}</option>
                                                        )
                                                    })}
                                                </select>
                                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ addorgmodal: true })} ><i className="pe-7s-plus"> </i> Add New Organization</a>
                                            </FormGroup>
                                        </Col>
                                        {this.state.addorgmodal &&
                                            <AddOrganization addorgmodal={this.state.addorgmodal} isaddorgmodal={this.isaddorgmodal} />
                                        }
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="property">Property *</Label>
                                                <select name="select" id="property" className="form-control">
                                                    {Location.property && Location.property.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.id}>{item.value}</option>
                                                        )
                                                    })}
                                                </select>
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
                                                <select name="select" id="location_types" className="form-control">
                                                    {Location.locationtypes && Location.locationtypes.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.id}>{item.value}</option>
                                                        )
                                                    })}
                                                </select>
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="label">Label *</Label>
                                                <Input type='text' />
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


