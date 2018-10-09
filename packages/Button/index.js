import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';
import Icon from '../Icon';

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
            icon,
            style,
            ...others
        } = this.props;
        let unclickable = false;
        if (disabled) {
            unclickable = true;
        }
        if (loading) {
            unclickable = true;
        }

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
            'nj-btn--gradient': size === 'gradient',
            'nj-btn--block': block,
            'nj-btn--plain': plain,
            'nj-btn--disabled': disabled,
            'nj-btn--unclickable': unclickable,
            [className]: className
        });

        let iconEl;
        if (icon) {
            iconEl = <Icon name={icon} />;
        }
        if (loading) {
            iconEl = <Icon name='loading' className='nj__loading' />;
        }
        return (
            <button style={style} className={cls} {...others}>
                {iconEl}
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
     * 按钮尺寸 gradient-带渐变背景色的large
     */
    size: PropTypes.oneOf(['mini', 'small', 'normal', 'large', 'gradient']),
    /**
     * 全屏按钮-块级vs行内
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
    /**
     * 按钮文案
     */
    children: PropTypes.node,
    /**
     * 类名
     */
    className: PropTypes.string,
    /**
     * 图标按钮
     */
    icon: PropTypes.string,
    /**
     * 样式
     */
    style: PropTypes.object,
};
Button.defaultProps = {};

export default Button;
