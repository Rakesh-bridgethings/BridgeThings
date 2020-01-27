import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata } from '../../services/Location'
import PageTitle from '../../components/includes/PageTitle';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button } from 'reactstrap';

class Location extends Component {
    state = {
    };

    componentDidMount = async () => {
        const { fetchlocationitemdata } = this.props;
        fetchlocationitemdata();
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
                                    <Col md="6" style={{ textAlign: 'right' }}>
                                        <Button color="success">Add Location</Button>
                                        {/* <Modal isOpen={this.state.changePass} fade={false} toggle={() => this.setState({ changePass: !this.state.changePass })} className={this.props.className}>
                                            <ModalHeader toggle={() => this.setState({ changePass: !this.state.changePass })}>Change Password</ModalHeader>
                                            <ModalBody>
                                                <Form>
                                                    <FormGroup>
                                                        <Label for="current_password">Current Password*</Label>
                                                        <Input type='password' id="current_password" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="new_password">New Password*</Label>
                                                        <Input type='password' id="new_password" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="confirm_new_password">Confirm New Password*</Label>
                                                        <Input type='password' id="confirm_new_password" />
                                                    </FormGroup>
                                                </Form>

                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="link" onClick={() => this.setState({ changePass: !this.state.changePass })}>Cancel</Button>
                                                <Button color="dark" onClick={() => this.setState({ changePass: !this.state.changePass })}>Update</Button>{' '}
                                            </ModalFooter>
                                        </Modal> */}
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
                                                    <td className='action'><i className="lnr-pencil" />&nbsp;&nbsp;&nbsp;&nbsp;<i className="lnr-trash" /></td>
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
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Location);


