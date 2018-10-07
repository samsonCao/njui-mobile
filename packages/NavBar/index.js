import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import Icon from '../Icon';
import './index.scss';

class NavBar extends Component {
    render() {
        const { title, fixed, onLeftClick, onRightClick } = this.props;
        const leftText = this.props['left-text'];
        const leftIcon = this.props['left-icon'];
        const rightText = this.props['right-text'];
        const rightIcon = this.props['right-icon'];
        const zIndex = this.props['z-index'] || '1000';

        const cls = classNames({
            'nj-nav-bar': true,
            'nj-hairline': true,
            'nj-hairline--bottom': true,
            'nj-nav-bar--fixed': fixed
        });

        return (
            <div className={cls} style={{ zIndex: zIndex }}>
                <div className='nj-nav-bar__left' onClick={onLeftClick}>
                    {leftIcon && <Icon name={leftIcon} />}
                    {leftText && <div className='nj-nav-bar__text'>{leftText}</div>}
                </div>

                <div className='nj-nav-bar__title'>{title}</div>

                <div className='nj-nav-bar__right' onClick={onRightClick}>
                    {rightText && <div className='nj-nav-bar__text'>{rightText}</div>}
                    {rightIcon && <Icon name={rightIcon} />}
                </div>
            </div>
        );
    }
}

NavBar.propTypes = {
    /**
     * 标题
     */
    title: PropTypes.string.isRequired,
    /**
     * 固定在顶部
     */
    fixed: PropTypes.bool,
    /**
     * 左侧 Icon 名称
     */
    'left-icon': PropTypes.string,
    /**
     * 左侧文字
     */
    'left-text': PropTypes.string,
    /**
     * 右侧文字
     */
    'right-text': PropTypes.string,
    /**
     * 右侧 Icon 名称
     */
    'right-icon': PropTypes.string,
    /**
     * 层级, 默认 1000
     */
    'z-index': PropTypes.string,
    /**
     * 左侧点击回调
     */
    onLeftClick: PropTypes.func,
    /**
     * 右侧点击回调
     */
    onRightClick: PropTypes.func
};
NavBar.defaultProps = {};

export default NavBar;
