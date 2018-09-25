import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar } from 'njui-mobile';

class SwipePage extends Component {
    render() {
        return (
            <div>
                <NavBar left-arrow title='Swipe' fixed onLeftClick={() => window.history.go(-1)} />
            </div>
        );
    }
}

SwipePage.propTypes = {};
SwipePage.defaultProps = {};

export default SwipePage;
