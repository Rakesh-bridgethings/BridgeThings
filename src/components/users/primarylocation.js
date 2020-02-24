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
    Form, Label, FormGroup, DropdownItem
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Notification from '../../library/notification';
import Loading from '../../library/loader';
import _ from "lodash";
import { Input } from "semantic-ui-react";

class Primarylocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    state = {
        alluserdata: {},
        selectedLocation: [],
        expanded: [],
        treeData: [],
        keyword: '',
    }

    componentWillMount = async () => {
        this.setState({ alluserdata: this.props.addUserData });
        if (this.props.data.User.primary_loc_data && this.props.data.User.primary_loc_data.length > 0) {
            let treeData = this.props.data.User.primary_loc_data && this.props.data.User.primary_loc_data.map((item, index) => {
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
                                                                        checked: item3.checked,
                                                                        partialChecked: item3.partialChecked
                                                                    }
                                                                )
                                                            }),
                                                        checked: item2.checked,
                                                        partialChecked: item2.partialChecked
                                                    }
                                                )
                                            }),
                                        checked: item1.checked,
                                        partialChecked: item1.partialChecked
                                    }
                                )
                            }),
                        checked: item.checked,
                        partialChecked: item.partialChecked
                    }
                )
            })
            await this.setState({ treeData: treeData });
        }
    }

    componentWillReceiveProps = async (props) => {
        if (props.data.User.primary_loc_data && props.data.User.primary_loc_data.length > 0) {
            let treeData = props.data.User.primary_loc_data && props.data.User.primary_loc_data.map((item, index) => {
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
                                                                        checked: item3.checked,
                                                                        partialChecked: item3.partialChecked
                                                                    }
                                                                )
                                                            }),
                                                        checked: item2.checked,
                                                        partialChecked: item2.partialChecked
                                                    }
                                                )
                                            }),
                                        checked: item1.checked,
                                        partialChecked: item1.partialChecked
                                    }
                                )
                            }),
                        checked: item.checked,
                        partialChecked: item.partialChecked
                    }
                )
            })
            await this.setState({ treeData: treeData });
        }
    }

    onSearchInputChange = (event, data, searchedNodes) => {
        this.setState(prevState => {
            if (prevState.keyword.trim() && !data.value.trim()) {
                return {
                    expanded: [],
                    keyword: data.value
                };
            }
            return {
                expanded: this.getAllValuesFromNodes(searchedNodes, true),
                keyword: data.value
            };
        });
    };

    getHighlightText = (text, keyword) => {
        const startIndex = text.indexOf(keyword);
        return startIndex !== -1 ? (
            <span>
                {text.substring(0, startIndex)}
                <span style={{ color: "#2cb664" }}>
                    {text.substring(startIndex, startIndex + keyword.length)}
                </span>
                {text.substring(startIndex + keyword.length)}
            </span>
        ) : (
                <span>{text}</span>
            );
    };

    keywordFilter = (nodes, keyword) => {
        let newNodes = [];
        for (let n of nodes) {
            if (n.children) {
                const nextNodes = this.keywordFilter(n.children, keyword);
                if (nextNodes.length > 0) {
                    n.children = nextNodes;
                } else if (n.label.toLowerCase().includes(keyword.toLowerCase())) {
                    n.children = nextNodes.length > 0 ? nextNodes : [];
                }
                if (
                    nextNodes.length > 0 ||
                    n.label.toLowerCase().includes(keyword.toLowerCase())
                ) {
                    n.label = this.getHighlightText(n.label, keyword);
                    newNodes.push(n);
                }
            } else {
                if (n.label.toLowerCase().includes(keyword.toLowerCase())) {
                    n.label = this.getHighlightText(n.label, keyword);
                    newNodes.push(n);
                }
            }
        }
        return newNodes;
    };

    getAllValuesFromNodes = (nodes, firstLevel) => {
        if (firstLevel) {
            const values = [];
            for (let n of nodes) {
                values.push(n.value);
                if (n.children) {
                    values.push(...this.getAllValuesFromNodes(n.children, false));
                }
            }
            return values;
        } else {
            const values = [];
            for (let n of nodes) {
                values.push(n.value);
                if (n.children) {
                    values.push(...this.getAllValuesFromNodes(n.children, false));
                }
            }
            return values;
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.keyword !== nextState.keyword) {
            return true;
        }
        if (!_.isEqual(this.state.selectedLocation, nextState.selectedLocation)) {
            return true;
        }
        if (_.isEqual(this.state.expanded, nextState.expanded)) {
            return false;
        }
        return true;
    }

    OncheckTreeData = async (checked) => {
        await this.setState({ selectedLocation: checked });
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
        let searchedNodes = this.state.keyword.trim()
            ? this.keywordFilter(_.cloneDeep(this.state.treeData), this.state.keyword)
            : this.state.treeData;
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
                                                    <Input
                                                        className='search_location'
                                                        style={{ marginBottom: "20px" }}
                                                        fluid
                                                        icon="search"
                                                        placeholder="Search Primary Locations..."
                                                        iconPosition="left"
                                                        onChange={(event, data) => {
                                                            this.onSearchInputChange(event, data, searchedNodes);
                                                        }}
                                                        autoComplete='off'
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='12'>
                                                <FormGroup>
                                                    <CheckboxTree
                                                        nodes={searchedNodes}
                                                        checked={this.state.selectedLocation}
                                                        expanded={this.state.expanded}
                                                        onCheck={checked => {
                                                            this.OncheckTreeData(checked)
                                                        }}
                                                        onExpand={expanded => this.setState({ expanded })}
                                                        expandOnClick
                                                        onClick={() => {
                                                            console.log("on click");
                                                        }}
                                                        showNodeIcon={false}
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