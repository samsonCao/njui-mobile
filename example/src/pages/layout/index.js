import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { NavBar } from 'njui-mobile';

class LayoutPage extends Component {
    render() {
        return (
            <div>
                <NavBar left-text='返回' title='Layout' fixed onLeftClick={() => window.history.go(-1)} />
            </div>
        );
    }
}

LayoutPage.propTypes = {};
LayoutPage.defaultProps = {};

export default LayoutPage;
