import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata } from '../../services/Location'
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

class Location extends Component {
    constructor (props) {
        super(props);
    }

    state = {
        addlocationmodal: false,
    };

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata ();
    }

    isaddlocatiionmodal = () => {
        this.setState({ addlocationmodal: !this.state.addlocationmodal });
    }   

    render() {
        const { Location } = this.props.data;
        console.log("props::", Location);
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
                                        <Button color="success" onClick={() => this.setState({ addlocationmodal: !this.state.addlocationmodal })}>Add Location</Button>
                                        <AddLocation addlocationmodal={this.state.addlocationmodal} isaddlocatiionmodal = {this.isaddlocatiionmodal} />
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Table className="mb-0">
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
                                </Table>
                            </CardBody>
                        </Card>
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
    fetchlocationitemdata: fetchlocationitemdata,
    fetchorganizationdata: fetchorganizationdata,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Location);


