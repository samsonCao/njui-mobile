import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';

class Tag extends Component {
    render() {
        const { type, plain, mark, children, ...others } = this.props;
        const cls = classNames({
            'nj-tag': true,
            'nj-tag--primary': type === 'primary',
            'nj-tag--success': type === 'success',
            'nj-tag--danger': type === 'danger',
            'nj-tag--warning': type === 'warning',
            'nj-tag--plain': plain,
            'nj-tag--mark': mark,
            'nj-hairline--surround': true
        });
        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
}

Tag.propTypes = {
    type: PropTypes.oneOf(['primary', 'success', 'danger', 'warning']),
    plain: PropTypes.bool,
    mark: PropTypes.mark,
    children: PropTypes.node
};
Tag.defaultProps = {};

export default Tag;
