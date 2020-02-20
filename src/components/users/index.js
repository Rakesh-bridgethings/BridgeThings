import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTitle from '../../components/includes/PageTitle';
import { fetchuseritemdata } from '../../services/User';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Adduser from './add_user';
import Switch from "react-switch";
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
import Edituser from './edit_user';
class Users extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        alluserdata: [],
        addusermodal: false,
        showaddnoti: '',
        checked: false,
        editusermodal: false

    }
    componentWillReceiveProps = (props) => {
        let data = props.data.User.useritem;
        let alluserdata = [];
        data && data.map((item, index) => {
            alluserdata.push({
                "id": item.id,
                "firstName": item.firstName,
                "lastName": item.lastName,
                "username": item.username,
                "email": item.email,
                "entityName": item.entityName,
                "entityId": item.entityId,
                "lastLoginOn": item.lastLoginOn,
                "activatedAt": item.activatedAt,
                "loginCount": item.loginCount,
                "roleName": item.roleName,
                "status": item.status,
                "notificationMode": item.notificationMode,
            }
            )
        })
        this.setState({ alluserdata });
        // console.log("alll::",alluserdata)
    }
    componentDidMount = async () => {
        const { fetchuseritemdata } = this.props;
        await fetchuseritemdata();
    }
    handleChange(row, checked) {
        console.log("row::", row, "checked::", checked);
        this.setState({ checked });
    }

    isaddusermodal = () => {
        this.setState({ addusermodal: !this.state.addusermodal });
        this.setState({ notitype: 'adduser' });
    };
    add_user = () => {
        this.setState({ addusermodal: !this.state.addusermodal });
        this.setState({ notitype: 'adduser' });
    };
    edit_user = () => {
        this.setState({ editusermodal: !this.state.editusermodal });
        this.setState({ notitype: 'edituser' })
    }
    iseditusermodal = () => {
        this.setState({ editusermodal: !this.state.editusermodal });
        this.setState({ notitype: 'edituser' })
    }
    shownoti = (val) => {
        this.setState({ notitype: val });
    };
    render() {
        const { User } = this.props.data;
        const { Status } = this.props.data;
        const columns = [
            {
                title: 'Roles',
                prop: 'roleName',
                width: '50px'
            },
            {
                title: 'First Name',
                prop: 'firstName',
                width: '60px'

            },
            {
                title: 'Last Name',
                prop: 'lastName',
                width: '80px'
            },
            {
                title: 'Email',
                prop: 'email',
                width: '100px'
            },
            {
                title: 'Organization',
                prop: 'entityName',
                width: '150px',
            },
            {
                title: 'Intitial Login',
                prop: 'activatedAt',
                width: '120px'

            },
            {
                title: 'Last Login',
                prop: 'lastLoginOn',
                width: '120px'
            },
            {
                title: 'No.of Logins',
                prop: 'loginCount',
                width: '30px'

            },
            {
                title: 'Actions',
                render: (val, row) => <div><i className="lnr-pencil" style={{ cursor: 'pointer' }} onClick={() => this.edit_user(row)} /></div>,
                width: '40px'
            },
            {
                title: 'Alerts',
                width: '150px',
                render: (val, row) => <div>
                    <Switch
                        checked={row.status && row.status === 1 ? true : false}
                        onChange={(row) => this.handleChange(row)}
                        height={20}
                        width={35}
                        className="react-switch"
                        id="small-radius-switch"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#007ad9"
                    />
                    {row.notificationMode && row.notificationMode.split(', ').indexOf('Email') > -1 && <i className="pe-7s-mail" />}{" "}
                    {row.notificationMode && row.notificationMode.split(', ').indexOf('Phone') > -1 && <i className="pe-7s-comment" />}
                </div>
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
                                heading="Users"
                                icon="pe-7s-users icon-gradient bg-mean-fruit"
                            />
                            <Card className="main-card mb-3">
                                <CardHeader>
                                    <Row style={{ width: '100%' }}>
                                        <Col md="6" style={{ textAlign: 'left' }}>

                                        </Col>
                                        <Col md="6" style={{ textAlign: 'right' }} >
                                            <Button color="success"
                                                onClick={() => this.add_user()}
                                            >Add User</Button>
                                            <Adduser shownoti={this.shownoti} notitype={this.state.notitype} requiredMessage={this.state.requiredMessage} addusermodal={this.state.addusermodal} isaddusermodal={this.isaddusermodal} />
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className='page_css' id="user_tbl">
                                    <DataTable
                                        columns={columns}
                                        initialData={this.state.alluserdata}
                                        initialPageLength={10}
                                        initialSortBy={{ prop: 'firstName', order: 'descending', prop: 'lastName,,', order: 'descending', prop: 'email', order: 'descending', prop: 'entityName', order: 'descending', prop: 'lastLoginOn', order: 'descending', prop: 'loginCount', order: 'descending', prop: 'activatedAt', order: 'descending', }}
                                        sortable={true}
                                    />
                                    <Edituser shownoti={this.shownoti} notitype={this.state.notitype} requiredMessage={this.state.requiredMessage} editusermodal={this.state.editusermodal} iseditusermodal={this.iseditusermodal} />
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
    fetchuseritemdata: fetchuseritemdata

}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);


