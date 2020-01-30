import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchentitytypesdata, fetchdayintervalsdata } from '../../services/Location'
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

class Business_Hours extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.startend_hours = this.startend_hours.bind(this);
        this.business_hrs = this.business_hrs.bind(this);
        this.save = this.save.bind(this);
    }

    state = {
        addlocationmodal: false,
        addorganizationmodal: false,
        addpropertymodal: false,
        busi_details: [],
        saveClicked: false,
        errorClass: 'is-invalid',
    };

    componentDidMount = async () => {
        const { fetchlocationitemdata, fetchorganizationdata, fetchlocationtypesdata, fetchentitytypesdata, fetchdayintervalsdata } = this.props;
        fetchlocationitemdata();
        fetchorganizationdata();
        fetchlocationtypesdata();
        fetchentitytypesdata();
        fetchdayintervalsdata();
    }


    business_hrs = (e, index, item) => {
        let busi_details = [...this.state.busi_details];
        const index1 = busi_details.findIndex((e) => e.index === index);
        if (index1 === -1) {
            busi_details.push({ 'business_hrs': e.target.value, 'day': item, 'index': index });
        } else {
            busi_details[index1]['business_hrs'] = e.target.value;
            busi_details[index1]['day'] = item;
            busi_details[index1]['index'] = index;
        }
        this.setState({ busi_details });
    }

    startend_hours = (e, time, index, item) => {
        let busi_details = [...this.state.busi_details];
        busi_details.map((item1, index1) => {  
            if(time === 'start' && index === item1.index && item === item1.day){ 
                busi_details[index1]['start'] = e.target.value;
             }
            if(time === 'end' && index === item1.index && item === item1.day){ 
                busi_details[index1]['end'] = e.target.value;
            }
        })
        this.setState({ busi_details })
    }

    toggle = () => {
        this.props.isaddnextmodal();
    }

    save = () => {
        this.setState({ saveClicked: true });
        let busi_details = this.state.busi_details;
        const busi_hrs = busi_details.findIndex((e) => e.business_hrs === 'fixed_hrs');        
        if (busi_hrs === -1) {
            this.props.business_hrsdata(this.state.busi_details);
            this.props.isclosemodals();
        } else {            
            if((busi_details[busi_hrs]['start'] && busi_details[busi_hrs]['start'] !== '') && (busi_details[busi_hrs]['end'] && busi_details[busi_hrs]['end'] !== '')) {
                this.props.business_hrsdata(this.state.busi_details);
                this.props.isclosemodals();
            } 
        }             
    }

    back = () => {
        this.props.isaddnextmodal();
    }

    render() {
        const { Location } = this.props.data;
        let hrsOption = [
            {
                'label': 'Holiday',
                'value': 'holiday'
            },
            {
                'label': 'Allday',
                'value': 'allday'
            },
            {
                'label': 'Fixed Hours',
                'value': 'fixed_hrs'
            },
        ]
        let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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

                        <Modal isOpen={this.props.addnextmodal} toggle={() => this.toggle()} className={this.props.className} id='add_location'>
                            <ModalHeader toggle={() => this.toggle()}>Business Hours</ModalHeader>
                            <ModalBody>
                                <Form>
                                    {weekdays.map((item1, index1) => {
                                        return (
                                            <Fragment key={index1}>
                                                <Row>
                                                    <Col md='12'>
                                                            <Label>{item1}</Label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md='4'>
                                                        <FormGroup>
                                                            <select id={item1} className="form-control" onChange={(e) => this.business_hrs(e, index1, item1)}>
                                                                <option selected value=''>Select Business Hours</option>
                                                                {hrsOption.map((item, index) => {
                                                                    return (
                                                                        <option key={index} value={item.value}>{item.label}</option>
                                                                    )
                                                                })}
                                                            </select>
                                                        </FormGroup>
                                                    </Col>
                                                    {this.state.busi_details.length > 0 && this.state.busi_details.map((item2, index2) => {
                                                        if (item2.business_hrs === 'fixed_hrs' && item2.index === index1) {
                                                            return (
                                                                <Fragment key={index2}>
                                                                    <Col md='4' >
                                                                        <FormGroup>
                                                                            <select className={`form-control ${(!item2.start || item2.start === '') && this.state.saveClicked && 'is-invalid'}`}
                                                                            onChange={(e) => this.startend_hours(e, 'start', index1, item1)}>
                                                                                <option selected value=''>Start Hours</option>
                                                                                {Location.daysinterval.map((item, index) => {
                                                                                    return (
                                                                                        <option key={index} value={item.minutes}>{item.value}</option>
                                                                                    )
                                                                                })}
                                                                            </select>
                                                                        </FormGroup>
                                                                    </Col>
                                                                    <Col md='4'>
                                                                        <FormGroup>
                                                                            <select className={`form-control ${(!item2.end || item2.end === '') && this.state.saveClicked && 'is-invalid'}`}
                                                                            onChange={(e) => this.startend_hours(e, 'end', index1, item1)}>
                                                                                <option selected value='' >End Hours</option>
                                                                                {Location.daysinterval.map((item, index) => {
                                                                                    return (
                                                                                        <option key={index} value={item.minutes}>{item.value}</option>
                                                                                    )
                                                                                })}
                                                                            </select>
                                                                        </FormGroup>
                                                                    </Col>
                                                                </Fragment>
                                                            )
                                                        }
                                                    })
                                                    }
                                                </Row>
                                            </Fragment>
                                        )
                                    })}
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" onClick={() => this.back()}>Back</Button>
                                <Button color="dark" onClick={() => this.save()}>Save</Button>{' '}
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
    fetchlocationitemdata: fetchlocationitemdata,
    fetchorganizationdata: fetchorganizationdata,
    fetchlocationtypesdata: fetchlocationtypesdata,
    fetchentitytypesdata: fetchentitytypesdata,
    fetchdayintervalsdata: fetchdayintervalsdata,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Business_Hours);


