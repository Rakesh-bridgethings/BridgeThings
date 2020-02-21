import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import { fetchPrimaryLocation } from '../../services/User';
import {
    Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button,
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Notification from '../../library/notification';
import Loading from '../../library/loader';

const nodes = [{
    "label": "Brakes India Private Limited",
    "key": "o48",
    "id": null,
    "children": [
        {
            "label": "Chennai,TN",
            "key": "o48r6743",
            "id": null,
            "children": [
                {
                    "label": "Padi",
                    "key": "o48r6743p31",
                    "id": null,
                    "children": [
                        {
                            "label": "ty",
                            "key": "o48r6743p31l||100",
                            "id": null,
                            "children": null,
                            "checked": true,
                            "partialChecked": true
                        },
                        {
                            "label": "grtgh",
                            "key": "o48r6743p31l||171",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "rtrtrtrty",
                            "key": "o48r6743p31l||170",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "sdferfg",
                            "key": "o48r6743p31l||158",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "nghnghnghn",
                            "key": "o48r6743p31l||204",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "kikikikiki",
                            "key": "o48r6743p31l||199",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "jyjuyjuy",
                            "key": "o48r6743p31l||186",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "qqqq",
                            "key": "o48r6743p31l||165",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "jyjuyjuy",
                            "key": "o48r6743p31l||187",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "rakesh",
                            "key": "o48r6743p31l||240",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "tyhtyh",
                            "key": "o48r6743p31l||167",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "efwef",
                            "key": "o48r6743p31l||160",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "efwef",
                            "key": "o48r6743p31l||159",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "34",
                            "key": "o48r6743p31l||98",
                            "id": null,
                            "children": null,
                            "checked": true,
                            "partialChecked": true
                        },
                        {
                            "label": "df",
                            "key": "o48r6743p31l||101",
                            "id": null,
                            "children": null,
                            "checked": true,
                            "partialChecked": true
                        },
                        {
                            "label": "ewfwef",
                            "key": "o48r6743p31l||161",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "sfsdf",
                            "key": "o48r6743p31l||102",
                            "id": null,
                            "children": null,
                            "checked": true,
                            "partialChecked": true
                        },
                        {
                            "label": "eryrthrt",
                            "key": "o48r6743p31l||169",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "main",
                            "key": "o48r6743p31l||104",
                            "id": null,
                            "children": null,
                            "checked": true,
                            "partialChecked": true
                        },
                        {
                            "label": "Main Building",
                            "key": "o48r6743p31l||89",
                            "id": null,
                            "children": null,
                            "checked": true,
                            "partialChecked": true
                        },
                        {
                            "label": "grtghefwef",
                            "key": "o48r6743p31l||173",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "grtgh",
                            "key": "o48r6743p31l||172",
                            "id": null,
                            "children": null,
                            "checked": false,
                            "partialChecked": false
                        },
                        {
                            "label": "sdf",
                            "key": "o48r6743p31l||105",
                            "id": null,
                            "children": null,
                            "checked": true,
                            "partialChecked": true
                        }
                    ],
                    "checked": false,
                    "partialChecked": false
                }
            ],
            "checked": false,
            "partialChecked": false
        }
    ],
    "checked": false,
    "partialChecked": false
}];


class Primarylocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    state = {
        selectedLocation: [],
        expanded: [],
        alluserdata: {},
    }

    componentWillMount = async () => {
        this.setState({ alluserdata: this.props.addUserData });
        let { fetchPrimaryLocation } = this.props;
        await fetchPrimaryLocation(this.props.addUserData.entityId);
    }

    primaryChecked = (checked) => {
        this.setState({ selectedLocation: checked });
    }

    back = () => {
        this.props.isaddnextmodaluser();
        this.props.isclosemodalsuser();
    }
    toggle = () => {
        this.props.isaddnextmodaluser();
    }
    save = () => {        
        let alluserdata = this.state.alluserdata;
        alluserdata.locations = this.state.selectedLocation;
        this.props.AdduserData(alluserdata);
        this.props.isclosemodalsuser();        
    }

    render() {
        const { Status } = this.props.data;
        const { User } = this.props.data;
        const treeData = nodes && nodes.map((item, index) => {
            return (
                {
                    value: item.key,
                    label: item.label,
                    children:
                        item.children && item.children.map((item1, index1) => {
                            return (
                                {
                                    value: item1.key,
                                    label: item1.label,
                                    children:
                                        item1.children && item1.children.map((item2, index2) => {
                                            return (
                                                {
                                                    value: item2.key,
                                                    label: item2.label,
                                                    children:
                                                        item2.children && item2.children.map((item3, index3) => {
                                                            return (
                                                                {
                                                                    value: item3.key.split('||')[1],
                                                                    label: item3.label,
                                                                }
                                                            )
                                                        })

                                                }
                                            )
                                        })

                                }
                            )
                        })

                }
            )
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
                        {Status.status !== '' && Status.page === 'adduser' && this.props.notitype === 'adduser' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addnextmodaluser} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.addnextmodaluser} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Primary Location</ModalHeader>
                            <ModalBody>
                                <Card>
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
                                                        nodes={treeData} //User.primary_loc_data
                                                        showNodeIcon={false}
                                                        checked={this.state.selectedLocation}
                                                        expanded={this.state.expanded}
                                                        searchEnabled={true}
                                                        onCheck={checked => this.primaryChecked(checked)}
                                                        onExpand={expanded => this.setState({ expanded })}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" onClick={() => this.back()}>Back</Button>
                                <Button color="success" onClick={() => this.save()}>Save</Button>{' '}
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
    fetchPrimaryLocation: fetchPrimaryLocation,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Primarylocation);