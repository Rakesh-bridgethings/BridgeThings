import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { fetchsensoritemdata } from '../../services/Sensors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import { DataTable } from 'react-data-components';
import Loading from '../../library/loader';
import Addsensor from './add_sensor';
import EditSensor from './edit_sensor';

class Sensors extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        alltablesensdata: [],
        addsensormodal: false,
    }

    componentWillReceiveProps = (props) => {
        let data = props.data.Sensors.sensoritem;
        let alltablesensdata = [];
        data && data.map((item, index) => {
            alltablesensdata.push({
                "reference": item.reference,
                "channelNo": item.channelNo,
                "sensorType": item.sensorType.value,
                "manufacturers": item.manufacturers.value,
                "modelNo": item.modelNo,
                "sensorStatus": item.sensorStatus,
                "lastDataAt": item.lastDataAt,
                "floor": item.floor,
                "id": item.id,
            })
        })
        this.setState({ alltablesensdata });
    }

    componentDidMount = async () => {
        const { fetchsensoritemdata } = this.props;
        await fetchsensoritemdata();
    }

    add_sensor = () => {
    }

    isaddsensoemodal = () => {
        this.setState({ addsensormodal: !this.state.addsensormodal });
        this.setState({ notitype: 'addsensor' });
    }
    iseditsensoemodal = () => {
        this.setState({ editsensormodal: !this.state.editsensormodal });
        this.setState({ notitype: 'editsensor' });
    }
    isaddsensoemodalcancle = () => {
        this.setState({ addsensormodal: !this.state.addsensormodal });
    }
    iseditsensoemodalcancle = () => {
        this.setState({ editsensormodal: !this.state.editsensormodal });
    }

    add_sensor = () => {
        this.setState({ addsensormodal: !this.state.addsensormodal });
        this.setState({ notitype: 'addsensor' });
        this.setState({ notitype: '' });
    }

    render() {
        const { Status } = this.props.data;
        const { Sensors } = this.props.data;
        // console.log(";;;",this.props.data);
        const columns = [
            {
                title: 'Reference',
                prop: 'reference',

            },
            {
                title: 'ChannelNo',
                prop: 'channelNo',

            },
            {
                title: 'Sensor Type',
                prop: 'sensorType',

            },
            {
                title: 'Manufacture',
                prop: 'manufacturers',

            },
            {
                title: 'ModelNo',
                prop: 'modelNo',

            },
            {
                title: 'Sensor Status',
                prop: 'sensorStatus',

            },
            {
                title: 'Last Data At',
                prop: 'lastDataAt',

            },
            {
                title: 'Actions',
                render: (val, row) => <div><i className="lnr-pencil" style={{ cursor: 'pointer' }} /></div>,

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
                                heading="Sensors"
                                icon="pe-7s-wristwatch icon-gradient bg-mean-fruit"
                            />
                            <Card className="main-card mb-3">
                                <CardHeader>
                                    <Row style={{ width: '100%' }}>
                                        <Col md="6" style={{ textAlign: 'left' }}>
                                        </Col>
                                        <Col md="6" style={{ textAlign: 'right' }} >
                                            <Button color="success"
                                                onClick={() => this.add_sensor()}
                                            >Add Sensors
                                             </Button>
                                            <Addsensor shownoti={this.shownoti} notitype={this.state.notitype} addsensormodal={this.state.addsensormodal} isaddsensoemodal={this.isaddsensoemodal} isaddsensoemodalcancle={this.isaddsensoemodalcancle} />
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className='page_css'>
                                    <DataTable
                                        columns={columns}
                                        sortable={true}
                                        initialData={this.state.alltablesensdata}
                                        initialPageLength={10}
                                        initialSortBy={{ prop: 'channelNo', prop: 'sensorStatus', order: 'descending' }}
                                    />
                                    <EditSensor shownoti={this.shownoti} notitype={this.state.notitype} editsensormodal={this.state.editsensormodal} iseditsensoemodal={this.iseditsensoemodal} iseditsensoemodalcancle={this.iseditsensoemodalcancle} />
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
    fetchsensoritemdata: fetchsensoritemdata

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sensors);