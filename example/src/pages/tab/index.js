import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { NavBar } from 'njui-mobile';

class TabPage extends Component {
    render() {
        return (
            <div>
                <NavBar left-text='返回' title='Tab' fixed onLeftClick={() => window.history.go(-1)} />
            </div>
        );
    }
}

TabPage.propTypes = {};
TabPage.defaultProps = {};

export default TabPage;
