import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTitle from '../../components/includes/PageTitle';
import {
    Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button,
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';
import { DataTable } from 'react-data-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../library/notification';
import Loading from '../../library/loader';
const nodes = [{
    value: 'mars',
    label: 'Mars',
    children: [
        { value: 'phobos', label: 'Phobos' },
        { value: 'deimos', label: 'Deimos' },
    ],
}];
class Primarylocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    state = {
        checked: [],
        expanded: [],
        

    }
    toggle = () => {
        this.props.isaddnextmodaluser();
    }
    render() {
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
                        {Status.status !== '' && Status.page === 'primarylocation' && this.props.notitype === 'primarylocation' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addnextmodaluser} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.addnextmodaluser} toggle={() => this.toggle()} className={this.props.className} id='prilocation_user'>
                            <ModalHeader toggle={() => this.toggle()}>Primary Location</ModalHeader>
                            <ModalBody>
                                <Card >
                                    <CardHeader>
                                        <Form>
                                            <Row>
                                                <Col md='12'>
                                                    <FormGroup>
                                                        <Label for="primarylocation">Locations</Label>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md='12'>
                                                <FormGroup>
                                                    <CheckboxTree
                                                        nodes={nodes}
                                                        showNodeIcon={false}
                                                        checked={this.state.checked}
                                                        expanded={this.state.expanded}                                             
                                                        searchEnabled={true}
                                                        // iconsClass="fa4"
                                                        // // nodes={nodesFiltered}
                                                        onCheck={checked => this.setState({ checked })}
                                                        onExpand={expanded => this.setState({ expanded })}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </ModalBody>
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

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Primarylocation);