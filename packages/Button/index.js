import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';

class Button extends Component {
    render() {
        const { type = 'default', size = 'normal', block, plain, disabled, loading, children, ...others } = this.props;
        const cls = classNames({
            'nj-btn': true,
            'nj-btn--default': type === 'default',
            'nj-btn--primary': type === 'primary',
            'nj-btn--warning': type === 'warning',
            'nj-btn--danger': type === 'danger',
            'nj-btn--mini': size === 'mini',
            'nj-btn--small': size === 'small',
            'nj-btn--normal': size === 'normal',
            'nj-btn--large': size === 'large',
            'nj-btn--block': block,
            'nj-btn--plain': plain,
            'nj-btn--disabled': disabled
        });

        // TODO: Button needs to support loading @liuzhiyuan
        return (
            <button className={cls} {...others}>
                <span>{children}</span>
            </button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warning', 'danger']),
    size: PropTypes.oneOf(['mini', 'small', 'normal', 'large']),
    block: PropTypes.bool,
    plain: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    children: PropTypes.node
};
Button.defaultProps = {};

export default Button;
