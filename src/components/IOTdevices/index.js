import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIOTDeviceData, fetcheditdata } from '../../services/IOTDevice';
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
import AddIOTDevice from './add_device';
import EditIOTDevice from './edit_device';
import { DataTable } from 'react-data-components';
import Loading from '../../library/loader';

class IOTDevices extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        alltabledata: [],
        showaddnoti: '',
        editdevicemodal: false,
        adddevicemodal: false,
    };

    componentWillReceiveProps = (props) => {
        let data = props.data.IOTDevice.devicedata;
        let alltabledata = [];
        data && data.map((item, index) => {
            alltabledata.push({
                "id": item.id,
                "deviceId": item.deviceId,
                "reference": item.reference,
                "deviceType": item.deviceType.value,
                "appKey": item.appKey,
                "networkKey": item.networkKey,
                "application": item.application,
                "dutyCycleMin": item.dutyCycleMin,
                "status": item.status,
                "lastConfigAt": item.lastConfigAt,
                "createdAt": item.createdAt,
                "lastModifiedAt": item.lastModifiedAt,
            }
            )
        })
        this.setState({ alltabledata });
    }

    componentDidMount = async () => {
        const { fetchIOTDeviceData } = this.props;
        await fetchIOTDeviceData();
    }

    shownoti = (val) => {
        this.setState({ notitype: val });
    }

    edit_device = async (row) => {
        let { fetcheditdata } = this.props;
        await fetcheditdata(row.id);
        this.setState({ editdevicemodal: !this.state.editdevicemodal });
        this.setState({ notitype: '' });
    }

    edit_loraconfig = (row) => {

    }

    add_device = () => {
        this.setState({ adddevicemodal: !this.state.adddevicemodal });
        this.setState({ notitype: '' });
    }

    isaddiotdevicemodal = () => {
        this.setState({ adddevicemodal: !this.state.adddevicemodal });
        this.setState({ notitype: 'adddevice' });
    }

    iseditdevicemodal = () => {
        this.setState({ editdevicemodal: !this.state.editdevicemodal });
        this.setState({ notitype: 'editdevice' });
    }   

    render() {
        const { IOTDevice } = this.props.data;
        const { Status } = this.props.data;
        const columns = [
            {
                title: 'Device Id',
                prop: 'deviceId',
                width: 40
            },
            {
                title: 'Reference',
                prop: 'reference',
                width: '40px'
            },
            {
                title: 'Device Type',
                prop: 'deviceType',
                width: '30px'
            },
            {
                title: 'AppKey',
                prop: 'appKey',
                width: '40px'
            },
            {
                title: 'Network Key',
                prop: 'networkKey',
                width: '60px'
            },
            {
                title: 'Application',
                prop: 'application',
                width: '60px'
            },
            {
                title: 'Duty Cycle Min',
                prop: 'dutyCycleMin',
                width: '20px'
            },
            {
                title: 'Status',
                prop: 'status',
                width: '20px'
            },
            // {
            //     title: 'LastConfigAt',
            //     prop: 'lastConfigAt',
            //     width: '30px'
            // },
            // {
            //     title: 'CreatedAt',
            //     prop: 'createdAt',
            //     width: '30px'
            // },
            // {
            //     title: 'LastModifiedAt',
            //     prop: 'lastModifiedAt',
            //     width: '30px'
            // },
            {
                title: 'Actions',
                render: (val, row) => <div><i className="lnr-pencil"
                    style={{ cursor: 'pointer' }} onClick={() => this.edit_device(row)} /></div>,
            },
            {
                title: 'Lora Config',
                render: (val, row) => <div><i className="lnr-flag"
                    style={{ cursor: 'pointer' }} onClick={() => this.edit_loraconfig(row)} /></div>,
            },
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
                                heading="IOT Devices"
                                icon="pe-7s-phone icon-gradient bg-mean-fruit"
                            />
                            <Card className="main-card mb-3">
                                <CardHeader>
                                    <Row style={{ width: '100%' }}>
                                        <Col md="6" style={{ textAlign: 'left' }}>

                                        </Col>
                                        <Col md="6" style={{ textAlign: 'right' }} >
                                            <Button color="success" onClick={() => this.add_device()}>Add IOT Device</Button>
                                            <AddIOTDevice shownoti={this.shownoti} notitype={this.state.notitype} adddevicemodal={this.state.adddevicemodal} isaddiotdevicemodal={this.isaddiotdevicemodal} />
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className='page_css' id="user_tbl">
                                    <DataTable
                                        columns={columns}
                                        initialData={this.state.alltabledata}
                                        initialPageLength={10}
                                        initialSortBy={{
                                            prop: 'entityReference', prop: "deviceId", prop: "reference", prop: "deviceType", prop: "appKey", prop: "networkKey", prop: "application", prop: "dutyCycleMin", prop: "status", prop: "lastConfigAt", prop: "createdAt", prop: "lastModifiedAt", order: 'descending'
                                        }}
                                        sortable={true}
                                    />
                                    {IOTDevice.editdata && <EditIOTDevice shownoti={this.shownoti} notitype={this.state.notitype} editdevicemodal={this.state.editdevicemodal} iseditdevicemodal={this.iseditdevicemodal} getEditData={IOTDevice.editdata} />}
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
    fetchIOTDeviceData: fetchIOTDeviceData,
    fetcheditdata: fetcheditdata,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IOTDevices);


