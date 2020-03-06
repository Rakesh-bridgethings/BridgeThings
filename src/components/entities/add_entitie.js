import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { fetchSectorTypeData, fetchEntitiTypeData, addEntitiy } from '../../services/Entities';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup
} from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../library/notification';
class Addentitie extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.validator = new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        }, {autoForceUpdate: this})
    }
    state = {
        type: '',
        name: '',
        sector: '',
        entitistepdata: [],
        loranetwork: false,      
    }
    componentDidMount = async () => {
        const { fetchSectorTypeData, fetchEntitiTypeData } = this.props;
        await fetchSectorTypeData();
        await fetchEntitiTypeData();
    }
    componentWillReceiveProps = (props) => {
    }
    addnameentitiy = (e) => {
        this.setState({ name: e.target.value });
    }
    onCheckedloranetwork = (e) => {
        this.setState({ loranetwork: e.target.checked });
    }
    toggle = () => {
        this.props.isaddentitimodal();
        this.setState({
            type: '',
            name: '',
            sector: '',
            loranetwork: false,    
        })
    }
    onsave = () => {
        if (this.validator.allValid()) {
            this.props.isaddentitimodal();
            let data = {
                "name": this.state.name,
                'enableLora': this.state.loranetwork,
                "entityType": { id: this.state.type.value },
                "sector": { id: this.state.sector.value }
            };
            let { addEntitiy } = this.props;
            addEntitiy(data);
            this.props.shownoti('addentitie');
            this.setState({
                type: '',
                name: '',
                sector: '',
                loranetwork: false,    
            })
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    render() {
        const { Entities, Status } = this.props.data;
        let addtypeentiti = Entities.addentititiydata && Entities.addentititiydata.map(function (item) {
            return { value: item.id, label: item.reference };
        })
        let addsectorentiti = Entities.sectordata && Entities.sectordata.map(function (item) {
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
                                                <Input type='text' id="name" placeholder="Enter Name" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
                                                {this.validator.message('Name', this.state.name, 'required')}
                                            </FormGroup>
                                        </Col>
                                        <Col md='6'>
                                            <FormGroup>
                                                <Label for="type" >Type*</Label>
                                                <Select
                                                    value={this.state.type}
                                                    onChange={(type) => this.setState({ type })}
                                                    options={addtypeentiti}
                                                    placeholder="Select Entity Type"
                                                  
                                                />
                                                {this.validator.message('Type', this.state.type, 'required')}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            <FormGroup>
                                                <Label for="role" >Sector</Label>
                                                <Select
                                                    value={this.state.sector}
                                                    onChange={(sector) => this.setState({ sector })}
                                                    options={addsectorentiti}
                                                    placeholder='Select Sector'
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
                                                        checked={this.state.loranetwork}
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
    fetchSectorTypeData: fetchSectorTypeData,
    fetchEntitiTypeData: fetchEntitiTypeData,
    addEntitiy: addEntitiy
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Addentitie);