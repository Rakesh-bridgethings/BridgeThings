import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTitle from '../../components/includes/PageTitle';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fetchentitiesdata } from '../../services/Entities';
// import Editentitiey from './edit_entitie';
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
import Notification from '../../library/notification';
import Addentitie from './add_entitie';
class Entities extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        allentitidata: [],
        addentitiemodal:false,
        notitype:'',
        editentitieymodal:false      
    }
    componentWillReceiveProps = (props) => {
        let data1 = props.data.Entities.entitiyitem;
        let allentitidata = [];
        data1 && data1.map((item, index) => {
            allentitidata.push({
               "id": item.id,
                "reference": item.reference,
                "name": item.name,
                "type": item.type,
                "industrySector": item.industrySector,
                "enableLora": item.enableLora,               
            }
            )
        })
        this.setState({ allentitidata });
    }
    componentDidMount = async () => {
        const { fetchentitiesdata } = this.props;
        await fetchentitiesdata();
    }
    isaddentitimodal=()=>{
        this.setState({addentitiemodal:!this.state.addentitiemodal});
        this.setState({ notitype: 'addentitie' });
    }
    add_entitie=()=>{
        this.setState({addentitiemodal:!this.state.addentitiemodal});
        this.setState({ notitype: 'addentitie' });
    }
    shownoti = (val) => {
        this.setState({ notitype: val });
    };
    edit_entitiey = (val) => {
        
    }
    render() {
        const { Entities } = this.props.data;
        const { Status } = this.props.data;
        const columns = [
            {
                title: 'Reference',
                prop: 'reference',
            },
            {
                title: 'Name',
                prop: 'name',
            },
            {
                title: 'Type',
                prop: 'type',
            },
            {
                title: 'Sector',
                prop: 'industrySector',
            },
            {
                title: 'Lora Network',
                width:'25px',
                render: (val, row) => <div><i className={`pe-7s-signal lora_network ${row.enableLora === true ? 'greennetwork' : 'rednetwork'}`}
                    style={{ cursor: 'pointer' }} onClick={() => this.edit_network(row)} /></div>,                
            }, 
            {
                title: 'Actions',
                render: (val, row) => <div><i className="lnr-pencil"
                    style={{ cursor: 'pointer' }} onClick={() => this.edit_entitiey(row)} /></div>,
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
                                heading="Entities"
                                icon="pe-7s-users icon-gradient bg-mean-fruit"
                            />
                            <Fragment>
                                {/* <Notification msg={Status.notificationMsg} status={Status.status} show={this.props.addlocationmodal} /> */}
                            </Fragment>
                            <Card className="main-card mb-3">
                                <CardHeader>
                                    <Row style={{ width: '100%' }}>
                                        <Col md="6" style={{ textAlign: 'left' }}>
                                        </Col>
                                        <Col md="6" style={{ textAlign: 'right' }} >
                                            <Button color="success"
                                               onClick={() => this.add_entitie()}
                                            >Add Entity
                                            </Button>
                                            <Addentitie shownoti={this.shownoti} notitype={this.state.notitype} requiredMessage={this.state.requiredMessage} addentitiemodal={this.state.addentitiemodal} isaddentitimodal={this.isaddentitimodal} />
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className='page_css'>
                                    <DataTable
                                        columns={columns}
                                        initialData={this.state.allentitidata}
                                        initialPageLength={10}
                                        initialSortBy={{
                                        prop: 'industrySector', order: 'descending', prop: 'name', order: 'descending'
                                        , prop: 'type', order: 'descending', prop: 'reference', order: 'descending', prop: 'enableLora', order: 'descending',
                                    }}
                                    sortable={true}                                    
                                    />
                                    
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
    fetchentitiesdata: fetchentitiesdata,
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Entities);