import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';

class Button extends Component {
    render() {
        const {
            type = 'default',
            size = 'normal',
            block,
            plain,
            disabled,
            loading,
            children,
            className,
            ...others
        } = this.props;
        const cls = classNames({
            'no-select': true,
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
            'nj-btn--disabled': disabled,
            [className]: className
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
    /**
     * 按钮类型
     */
    type: PropTypes.oneOf(['default', 'primary', 'warning', 'danger']),
    /**
     * 按钮尺寸
     */
    size: PropTypes.oneOf(['mini', 'small', 'normal', 'large']),
    /**
     * 全屏按钮
     */
    block: PropTypes.bool,
    /**
     * 空心按钮
     */
    plain: PropTypes.bool,
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 加载状态
     */
    loading: PropTypes.bool,
    children: PropTypes.node
};
Button.defaultProps = {};

export default Button;
