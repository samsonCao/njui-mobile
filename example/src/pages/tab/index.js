import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { NavBar } from 'njui-mobile';

class TabPage extends Component {
    render() {
        return (
            <div>
                <NavBar left-icon='left' title='Tab' fixed onLeftClick={() => window.history.go(-1)} />
            </div>
        );
    }
}

TabPage.propTypes = {};
TabPage.defaultProps = {};

export default TabPage;
