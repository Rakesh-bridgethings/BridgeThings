import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notification extends Component {
    constructor(props) {
        super(props);
    }

    state = {
    }

    componentDidMount = () => {
        this.props.status === 'success' && toast.success(this.props.msg);
        this.props.status === 'error' && toast.error('There is Something Wrong! Please try again...');
    }

    render() {
        return (
            <Fragment>
                <ToastContainer
                    position="top-right"
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    // rtl={false}
                    pauseOnVisibilityChange={false}
                    draggable
                    // pauseOnHover
                />
            </Fragment>
        )
    }

}



const mapStateToProps = state => ({
    data: state,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);






































