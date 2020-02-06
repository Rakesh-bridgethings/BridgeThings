import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loaders'
// import 'loaders.css/src/animations/ball-pulse.scss'


class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Loader type="line-scale" active />
            </Fragment>
        )
    }

}





export default Loading;
