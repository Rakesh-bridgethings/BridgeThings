import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { fetchsectorentititypedata, fetchentititypedata, addEntitiy, updatEntityData } from '../../services/Entities';
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
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../library/notification';
var diff = require('deep-diff').diff;

class Editentitiey extends Component {
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
        entitistepdata: [],
        reference: '',
        id: '',
        entityType: '',
        editentystepdata: {},
        industrySector: '',
        getappnetEntiData: {},
        enableLora:false,
        
    }
    componentDidMount = async () => {
        const { fetchsectorentititypedata, fetchentititypedata } = this.props;
        await fetchsectorentititypedata();
        await fetchentititypedata();
    }
    
    componentWillReceiveProps = async (props) => {
        let { Entities } = props.data;  
        Entities.editentititisecitem && Entities.editentititisecitem !== undefined && await this.setState({
            id: Entities.editentititisecitem.id,
            name: Entities.editentititisecitem.name,
            enableLora: Entities.editentititisecitem.enableLora,
            type: Entities.editentititisecitem.type,
            entityType: { value: Entities.editentititisecitem.entityType && Entities.editentititisecitem.entityType.id, label: Entities.editentititisecitem.type },
            sector: { value: Entities.editentititisecitem.sector && Entities.editentititisecitem.sector.id, label: Entities.editentititisecitem.industrySector },
        });
            if (this.props.data.Entities && this.props.data.Entities.editentititisecitem!== undefined) {
                const getappnetEntiData = {
                    name: this.props.data.Entities.editentititisecitem.name,
                    enableLora: this.props.data.Entities.editentititisecitem.enableLora,
                    type: this.props.data.Entities.editentititisecitem.type,
                    entityType: {id:this.props.data.Entities.editentititisecitem.entityType && this.props.data.Entities.editentititisecitem.entityType.id},
                    sector: {id:this.props.data.Entities.editentititisecitem.sector && this.props.data.Entities.editentititisecitem.sector.id}
                }
                this.setState({getappnetEntiData});
            }
    }
    addnameentitiy = (e) => {
        this.setState({ name: e.target.value });
        this.validator.showMessageFor('Name');
    }
    isloranetapp = () => {
        this.setState({ loraNetWork: !this.state.loraNetWork })
    }
    onCheckedloranetwork = (e) => {
        this.setState({ enableLora: e.target.checked });
    }
    toggle = () => {
        this.props.iseditentitieymodal();
    }
    onupadate = async() => {
        this.validator.showMessageFor('Type');
        this.validator.showMessageFor('Name');
        this.validator.showMessageFor('Sector');
        if (this.validator.allValid()) {   
            let data = {
                "id": this.state.id,
                "name": this.state.name,
                'enableLora': this.state.enableLora,
                "entityType": { id: this.state.entityType.value },
                "sector": { id: this.state.sector.value }
            };
            var differences = diff(this.state.getappnetEntiData, data);
            var dif = { ...dif };
            if (differences) {
                differences.map((item, index) => {
                    var value = item.rhs;
                    dif[item.path[0]] = value;
                })
            }
            dif.id = this.state.id;
            let { updatEntityData } = this.props;
            updatEntityData(dif);
            this.props.iseditentitieymodal();
            this.props.shownoti('editentitiey');
        }
    }
    render() {
        const { Entities } = this.props.data;
        let addtypeentiti = Entities.addentititypeitem && Entities.addentititypeitem.map(function (item) {
            return { value: item.id, label: item.reference };
        })
        let addsectorentiti = Entities.addentititisecitem && Entities.addentititisecitem.map(function (item) {
            return { value: item.id, label: item.value };
        })
        const { Status } = this.props.data;
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
                        {Status.status !== '' && Status.page === 'editentitiey' && this.props.notitype === 'editentitiey' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addentitiemodal} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.editentitieymodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Edit Entity</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="name">Name*</Label>
                                                <Input type='text' id="name" onChange={(e) => this.addnameentitiy(e)} value={this.state.name} />
                                                {this.validator.message('Name', this.state.name, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="type" placeholder="Select Entity Type">Entity Type*</Label>
                                                <Select
                                                    value={this.state.entityType}
                                                    onChange={(type) => this.setState({ entityType:type })}
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
                                                        checked={this.state.enableLora === true ? true : false}
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
                                <Button color="success" onClick={() => this.onupadate()} >Update</Button>{' '}
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
    updatEntityData: updatEntityData,
    addEntitiy: addEntitiy,
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editentitiey);