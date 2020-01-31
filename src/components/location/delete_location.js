import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteLocationData } from '../../services/Location'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button,
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';


class EditLocation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        getdeleteid: 0,
    };

    componentWillReceiveProps = (props) => {
        this.setState({
            getdeleteid: props.getdeleteid,
        })
    }

    componentDidMount = async () => {
        const { } = this.props;
    }

    toggle = () => {
        this.props.isdeletelocationmodal();
    }

    delete = () => {
        let { deleteLocationData } = this.props;
        deleteLocationData (this.state.getdeleteid);
        this.props.isdeletelocationmodal();
    }

    render() {
        const { Location } = this.props.data;
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
                        <Modal isOpen={this.props.deletelocationmodal} toggle={() => this.toggle()} className={this.props.className} id='delete_location'>
                            <ModalHeader toggle={() => this.toggle()}>Delete Confirmation</ModalHeader>
                            <ModalBody>
                                <p>Are you sure you want to delete this location?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" onClick={() => this.toggle()}>No</Button>
                                <Button color="danger" onClick={() => this.delete()}>Yes</Button>
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
    deleteLocationData: deleteLocationData,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditLocation);


