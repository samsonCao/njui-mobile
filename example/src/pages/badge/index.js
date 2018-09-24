import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar } from 'njui-mobile';

class BadgePage extends Component {
    render() {
        return (
            <div>
                <NavBar left-arrow title='Badge' fixed onLeftClick={() => window.history.go(-1)} />
            </div>
        );
    }
}

BadgePage.propTypes = {};
BadgePage.defaultProps = {};

export default BadgePage;
