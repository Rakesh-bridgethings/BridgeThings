import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata, editLocation } from '../../services/Location';
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
import AddLocation from './add_location';
import EditLocation from './edit_location';
import DeleteLocation from './delete_location';
import { DataTable } from 'react-data-components';
import Loading from '../../library/loader';

class Location extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        addlocationmodal: false,
        alltabledata: [],
        editlocationmodal: false,
        geteditid: 0,
        getdeleteid: 0,
        deletelocationmodal: false,
        requiredMessage: 'This field is required',
        showaddnoti: '',
    };

    componentWillReceiveProps = (props) => {
        let data = props.data.Location.locationitem;
        let alltabledata = [];
        data && data.map((item, index) => {
            alltabledata.push({
                "property": item.property,
                "propertyId": item.propertyId,
                "entityId": item.entityId,
                "entityReference": item.entityReference,
                "region": item.region,
                "zone": item.zone,
                "aggregateId": item.aggregateId,
                "floor": item.floor,
                "id": item.id,
            }
            )
        })
        this.setState({ alltabledata });
    }

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata } = this.props;
        await fetchlocationitemdata();
        await fetchorganizationdata();
    }

    isaddlocatiionmodal = () => {
        this.setState({ addlocationmodal: !this.state.addlocationmodal });
    }

    iseditlocatiionmodal = () => {
        this.setState({ editlocationmodal: !this.state.editlocationmodal });
    }

    isdeletelocationmodal = () => {
        this.setState({ deletelocationmodal: !this.state.deletelocationmodal });
    }

    edit_location = (item) => {
        const { editLocation } = this.props;
        editLocation(item.id);
        this.setState({ editlocationmodal: !this.state.editlocationmodal });
        this.setState({ geteditid: item.id });
    }

    delete_location = (item) => {
        this.setState({ deletelocationmodal: !this.state.deletelocationmodal });
        this.setState({ getdeleteid: item.id });
        this.setState ({ notitype: '' });
    }

    add_loc = () => {
        this.setState({ addlocationmodal: !this.state.addlocationmodal });
        this.setState ({ notitype: 'add' });
    }

    shownoti = (val) => {
        this.setState ({ notitype: val });
    }

    render() {
        const { Location } = this.props.data;
        const { Status } = this.props.data;        
        const columns = [
            // {
            //     title: '#',
            // render: (val, row) => <div>{row.id}</div>,
            // },
            {
                title: 'Organization',
                prop: 'entityReference',
            },
            {
                title: 'Region',
                prop: 'region',
            },
            {
                title: 'Property',
                prop: 'property',
            },
            {
                title: 'Floor',
                prop: 'floor',
            },
            {
                title: 'Zone',
                prop: 'zone',
            },
            {
                title: 'Aggregate Id',
                prop: 'aggregateId',
            },
            {
                title: 'Action',
                render: (val, row) => <div><i className="lnr-pencil" style={{ cursor: 'pointer' }} onClick={() => this.edit_location(row)} />&nbsp;&nbsp;&nbsp;&nbsp;<i className="lnr-trash" style={{ cursor: 'pointer' }} onClick={() => this.delete_location(row)} /></div>,
            }
        ];
        return (
            <Fragment>
                {Status.loading && <Loading />}
                {!Status.loading &&
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="TabsAnimation"
                        transitionAppear={true}
                        transitionAppearTimeout={0}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <div>
                            <PageTitle
                                heading="Locations"
                                icon="pe-7s-map-marker icon-gradient bg-mean-fruit"
                            />
                            <Card className="main-card mb-3">
                                <CardHeader>
                                    <Row style={{ width: '100%' }}>
                                        <Col md="6" style={{ textAlign: 'left' }}>

                                        </Col>
                                        <Col md="6" style={{ textAlign: 'right' }} >
                                            <Button color="success" onClick={() => this.add_loc()}>Add Location</Button>
                                            <AddLocation shownoti={this.shownoti} notitype={this.state.notitype} requiredMessage={this.state.requiredMessage} addlocationmodal={this.state.addlocationmodal} isaddlocatiionmodal={this.isaddlocatiionmodal} />
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className='page_css'>
                                    <DataTable
                                        columns={columns}
                                        initialData={this.state.alltabledata}
                                        initialPageLength={10}
                                        initialSortBy={{ prop: 'entityReference', order: 'descending' }}
                                        sortable={true}
                                    />
                                    <EditLocation shownoti={this.shownoti} notitype={this.state.notitype} requiredMessage={this.state.requiredMessage} editlocationmodal={this.state.editlocationmodal} iseditlocatiionmodal={this.iseditlocatiionmodal} geteditid={this.state.geteditid} getEditData={Location.editdata} />
                                    <DeleteLocation shownoti={this.shownoti} notitype={this.state.notitype} requiredMessage={this.state.requiredMessage} getdeleteid={this.state.getdeleteid} deletelocationmodal={this.state.deletelocationmodal} isdeletelocationmodal={this.isdeletelocationmodal} />
                                    {/* <Table className="mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Organization</th>
                                            <th>Region</th>
                                            <th>Property</th>
                                            <th>Floor</th>
                                            <th>Zone</th>
                                            <th>Aggregate Id</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Location && Location.locationitem.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.entityReference}</td>
                                                    <td>{item.region}</td>
                                                    <td>{item.property}</td>
                                                    <td>{item.floor}</td>
                                                    <td>{item.zone}</td>
                                                    <td>{item.aggregateId}</td>
                                                    <td className='action'><i className="lnr-pencil" onClick={() => this.edit_location(item, index)} />&nbsp;&nbsp;&nbsp;&nbsp;<i className="lnr-trash" /></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table> */}
                                </CardBody>
                            </Card>
                        </div>
                    </ReactCSSTransitionGroup>
                }
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
    editLocation: editLocation,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Location);


