import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import Item from './Item';
import './index.scss';

class TabBar extends Component {
    render() {
        const { fixed, children, ...others } = this.props;
        const cls = classNames({
            'nj-hairline--top-bottom': true,
            'nj-tabbar': true,
            'nj-tabbar--fixed': fixed
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
}

TabBar.propTypes = {
    fixed: PropTypes.bool,
    children: PropTypes.node
};
TabBar.defaultProps = {};

TabBar.Item = Item;
export default TabBar;
