import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { fetchsectorentititypedata, fetchentititypedata, addEntitiy } from '../../services/Entities';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button,
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../library/notification';
class Addentitie extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        })
    }
    state = {
        type: '',
        name: '',
        loraNetWork: false,
        sector: '',
        entitistepdata: []

    }
    componentDidMount = async () => {
        const { fetchsectorentititypedata, fetchentititypedata } = this.props;
        await fetchsectorentititypedata();
        await fetchentititypedata();
    }
    componentWillReceiveProps = (props) => {

    }
    addnameentitiy = (e) => {
        this.setState({ name: e.target.value });
    }
    onCheckedloranetwork = (e) => {
        this.setState({ loraNetWork: e.target.checked });
    }
    toggle = () => {
        this.props.isaddentitimodal();
    }
    onsave = () => {
        this.validator.showMessageFor('Type');
        this.validator.showMessageFor('Name');
        this.validator.showMessageFor('Sector');
        if (this.validator.allValid()) {
            this.props.isaddentitimodal();
            let data = {
                "name": this.state.name,
                'enableLora': this.state.loraNetWork,
                "entityType": { id: this.state.type.value },
                "sector": { id: this.state.sector.value }
            };
            let { addEntitiy } = this.props;
            addEntitiy(data);
            this.props.shownoti('addentitie');
        }
    }
    render() {
        const { Entities, Status } = this.props.data;
        let addtypeentiti = Entities.addentititypeitem && Entities.addentititypeitem.map(function (item) {
            return { value: item.id, label: item.reference };
        })
        let addsectorentiti = Entities.addentititisecitem && Entities.addentititisecitem.map(function (item) {
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
                        {Status.status !== '' && Status.page === 'addentitie' && this.props.notitype === 'addentitie' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addentitiemodal} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.addentitiemodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Add Entity</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="name">Name*</Label>
                                                <Input type='text' id="name" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
                                                {this.validator.message('Name', this.state.name, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="type" placeholder="Select Entity Type">Entity Type*</Label>
                                                <Select
                                                    value={this.state.type}
                                                    onChange={(type) => this.setState({ type })}
                                                    options={addtypeentiti}
                                                />
                                                {this.validator.message('Type', this.state.type, 'required')}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="role" placeholder='Select Sector'>Sector</Label>
                                                <Select
                                                    value={this.state.sector}
                                                    onChange={(sector) => this.setState({ sector })}
                                                    options={addsectorentiti}
                                                />
                                                {this.validator.message('Sector', this.state.sector, 'required')}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="network">Lore NetWork Enable or Not:</Label>
                                                <br />
                                                <label style={{ cursor: 'pointer' }}>
                                                    <Checkbox
                                                        checked={this.state.loraNetWork}
                                                        onChange={(e) => this.onCheckedloranetwork(e)}

                                                    /> &nbsp;LoraNetWork
                                                </label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" onClick={() => this.toggle()} >Cancel</Button>
                                <Button color="success" onClick={() => this.onsave()} >Save</Button>{' '}
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
    fetchsectorentititypedata: fetchsectorentititypedata,
    fetchentititypedata: fetchentititypedata,
    addEntitiy: addEntitiy
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Addentitie);