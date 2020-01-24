import React, {Component, Fragment} from 'react';

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink,
    Button,
    UncontrolledTooltip
} from 'reactstrap';

import {
    faStar,
    faBusinessTime

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    toast,
    Slide
} from 'react-toastify';

export default class TitleComponent2 extends Component {
    toggle(name) {
        this.setState({
            [name]: !this.state[name],
            progress: 0.5,
        })
    }

    notify22 = () => this.toastId = toast("Another toastify example!!!", {
        transition: Slide,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });

    render() {
        return (
            <Fragment>
                <Button className="btn-shadow mr-3" onClick={this.notify22} color="dark" id="Tooltip-123">
                    {/* <FontAwesomeIcon icon={faStar}/>  */}
                    <i className='pe-7s-refresh-2' /> Refresh
                </Button>
                {/* <UncontrolledTooltip placement="left" target={'Tooltip-123'}>
                    Show a Toastify notification example!
                </UncontrolledTooltip> */}
                <label>25 Dec 2019 to 24 Jan 2020</label>
            </Fragment>
        );
    }
}