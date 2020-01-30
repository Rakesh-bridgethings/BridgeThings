import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchentitytypesdata } from '../../services/Location'
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

class EditOrganization extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        editlocationmodal: false,
        editorganizationmodal: false,
        editpropertymodal: false,
        name: '',
        type: '',
        alldata: [],
        nextclick: false,
        errorClass: 'is-invalid',
    };

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchentitytypesdata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata();
        fetchlocationtypesdata();
        fetchentitytypesdata();
    }

    toggle = () => {
        this.props.iseditorgmodal(!this.props.editorgmodal);
    }

    onSave = () => {
        if (this.state.name !== '' && this.state.type !== '') {
            this.props.iseditorgmodal(!this.props.editorgmodal);
            let alldata = {
                name: this.state.name,
                type: this.state.type,
            }
            // edit_organization(alldata);
        }
        this.setState({ nextclick: true });
    }

    render() {
        const { Location } = this.props.data;
        const typedata = Location.entitytype.map(function (item) {
            return { value: item.id, label: item.reference };
        })
        const orgStyles = {
            control: (base, state) => ({
              ...base,
              borderColor: this.state.nextclick && this.state.type === '' ? '#C71C22' : '#ddd',
              '&:hover': {
                borderColor: this.state.nextclick && this.state.type === '' ? '#C71C22' : '#ddd'
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
                        <Modal isOpen={this.props.editorgmodal} toggle={() => this.toggle()} className={this.props.className} id='edit_location'>
                            <ModalHeader toggle={() => this.toggle()}>Edit Organization</ModalHeader>
                            <ModalBody>
                                <p><a href='#' >Edit Organization </a> / New Organization</p>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="name">Name *</Label>
                                                <Input type="text" id='name' onChange={(e) => this.setState({ name: e.target.value })}
                                                    className={`${this.state.nextclick && this.state.name === '' && this.state.errorClass}`} />
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="type">Type*</Label>
                                                <Select
                                                    value={this.state.type}
                                                    styles = {orgStyles}
                                                    onChange={(type) => this.setState({ type })}
                                                    options={typedata}
                                                />
                                                {/* <select name="select" id="type" onChange={(e) => this.setState({ type: e.target.value })}
                                                    className={`form-control ${this.state.nextclick && this.state.type === '' && this.state.errorClass}`}>
                                                        <option value='' selected>Select Organization Type</option>
                                                    {Location.entitytype && Location.entitytype.map((item, index) => {
                                                        return (
                                                            <option value={item.id}>{item.reference}</option>
                                                        )
                                                    })}
                                                </select> */}
                                            </FormGroup>
                                        </Col>
                                    </Row>
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
    fetchentitytypesdata: fetchentitytypesdata,
    // edit_organization: edit_organization,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditOrganization);


