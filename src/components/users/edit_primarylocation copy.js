import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import {
    Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button,
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';
import { fetchEditPrimaryLocation } from '../../services/User';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../library/notification';

class Editprimarylocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.filterTree = this.filterTree.bind(this);
        this.filterNodes = this.filterNodes.bind(this);
    }
    state = {
        editprilocmodal: false,
        nexteditprimarylocation: false,
        selectedLocation: [],
        expanded: [],
        treeData: [],
        nodesFiltered: [],
        filterText: '',
    }

    componentWillMount = async () => {
        let { fetchEditPrimaryLocation } = this.props;
        await fetchEditPrimaryLocation(this.props.entityId, this.props.editid);

    }

    componentWillReceiveProps = (props) => {
        if (props.data.User.editlocationdata && props.data.User.editlocationdata.length > 0) {
            let treeData = props.data.User.editlocationdata && props.data.User.editlocationdata.map((item, index) => {
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
                                                            }),
                                                        checked: item.checked,
                                                        partialChecked: item.partialChecked
                                                    }
                                                )
                                            }),
                                        checked: item.checked,
                                        partialChecked: item.partialChecked
                                    }
                                )
                            }),
                        checked: item.checked,
                        partialChecked: item.partialChecked
                    }
                )
            })
            this.setState({ treeData: treeData, nodesFiltered: treeData });
        }
    }

    backedit = () => {
        this.props.iscloseeditmodalprilocsuser();
        this.props.iseditprilocmodaluser();
    }

    toggle = () => {
        this.props.iseditprilocmodaluser();
    }

    onSave = async () => {
        await this.props.locationData(this.state.selectedLocation);
        this.props.iseditprilocmodaluser();
    }

    onChangeSearch = (e) => {
        this.setState({ filterText: e.target.value }, this.filterTree);
    }

    filterTree() {
        // Reset nodes back to unfiltered state
        if (!this.state.filterText) {
            this.setState((prevState) => ({
                nodesFiltered: prevState.treeData,
            }));
            return;
        }
        const nodesFiltered = (prevState) => (
            { nodesFiltered: prevState.treeData.reduce(this.filterNodes, []) }
        );
        this.setState(nodesFiltered);
    }

    filterNodes(filtered, node) {
        const { filterText } = this.state;
        const children = (node.children || []).reduce(this.filterNodes, []);

        if (
            // Node's label matches the search string
            node.label.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1 ||
            // Or a children has a matching node
            children.length
        ) {
            filtered.push({ ...node, children });
        }

        return filtered;
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
                        {Status.status !== '' && Status.page === 'editprimarylocation' && this.props.notitype === 'editprimarylocation' &&
                            <Fragment>
                                <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addnextmodaluser} />
                            </Fragment>
                        }
                        <Modal isOpen={this.props.editprilocmodal} toggle={() => this.toggle()} className={this.props.className} id='edit_location'>
                            <ModalHeader toggle={() => this.toggle()}>Edit Primary Location</ModalHeader>
                            <ModalBody>
                                <Card >
                                    <CardHeader>
                                        <h5 for="primarylocation">Locations</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Input type="search" className="filterTree" name="search" onChange={(e) => this.onChangeSearch(e)} value={this.state.filterText} autoCorrect={false} />
                                        </Row>
                                        <Row>
                                            <Col md='12'>
                                                <FormGroup>
                                                    {this.state.nodesFiltered.length > 0 &&
                                                        <CheckboxTree
                                                            nodes={this.state.nodesFiltered}
                                                            showNodeIcon={false}
                                                            checked={this.state.selectedLocation}
                                                            expanded={this.state.expanded}
                                                            onCheck={checked => this.setState({ selectedLocation: checked })}
                                                            onExpand={expanded => this.setState({ expanded })}
                                                        />}
                                                    {this.state.nodesFiltered.length === 0 &&
                                                        <p>No Location exist</p>
                                                    }
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </ModalBody>
                            <ModalFooter>

                                <Button color="light" onClick={() => this.backedit()}>Back</Button>
                                <Button color="success" onClick={() => this.onSave()}>Save</Button>{' '}
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
    fetchEditPrimaryLocation: fetchEditPrimaryLocation,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editprimarylocation);