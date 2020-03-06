import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEntityTypesData, addOrganizationData } from '../../services/Location'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup,
} from 'reactstrap';
import Select from 'react-select';
import SimpleReactValidator from 'simple-react-validator';


class AddOrganization extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        })
        this.toggle = this.toggle.bind(this);
    }

    state = {
        addlocationmodal: false,
        addorganizationmodal: false,
        addpropertymodal: false,
        name: '',
        type: '',
        alldata: [],
        nextclick: false,
        errorClass: 'is-invalid',
    };

    componentDidMount = async () => {
        const { fetchEntityTypesData } = this.props;
    
        fetchEntityTypesData();
    }

    toggle = () => {
        this.props.isaddorgmodal(!this.props.addorgmodal);
    }

    onSave = () => {
        this.validator.showMessageFor('type');
        this.validator.showMessageFor('name');
        if (this.validator.allValid()) {
            this.props.isaddorgmodal(!this.props.addorgmodal);
            let alldata = {
                name: this.state.name,
                entityType: { id: this.state.type.value }
            }
            const { addOrganizationData } = this.props;
            addOrganizationData(alldata);
        }
        this.setState({ nextclick: true });
    }

    render() {
        const { Location } = this.props.data;
        const typedata = Location.entitytypedata.map(function (item) {
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
                        <Modal isOpen={this.props.addorgmodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Add Organization</ModalHeader>
                            <ModalBody>
                                <p><a href='#' >Add Organization </a> / New Organization</p>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="name">Name *</Label>
                                                <Input type="text" id='name' placeholder="name" onChange={(e) => this.setState({ name: e.target.value })}
                                                    onBlur={() => this.validator.showMessageFor('name')}
                                                    className={`${this.state.nextclick && this.state.name === '' && this.state.errorClass}`} />
                                                {this.validator.message('name', this.state.name, 'required|alpha_num')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="type">Type*</Label>
                                                <Select
                                                    value={this.state.type}
                                                    styles={orgStyles}
                                                    onChange={(type) => this.setState({ type })}
                                                    options={typedata}
                                                    placeholder="Select Organization Type"
                                                />
                                                {this.validator.message('type', this.state.type, 'required')}
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
    fetchEntityTypesData: fetchEntityTypesData,
    addOrganizationData: addOrganizationData,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddOrganization);


