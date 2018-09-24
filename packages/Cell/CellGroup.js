import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';

class CellGroup extends Component {
    render() {
        const { children } = this.props;
        const cls = classNames({
            'nj-hairline': true,
            'nj-hairline--top-bottom': true,
            'nj-cell-group': true
        });
        return (
            <div className={cls}>{children}</div>
        );
    }
}

CellGroup.propTypes = {
    children: PropTypes.node
};
CellGroup.defaultProps = {};

export default CellGroup;
