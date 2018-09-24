import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import Icon from '../Icon';
import './index.scss';

class NavBar extends Component {
    render() {
        const { title, fixed, onLeftClick, onRightClick } = this.props;
        const leftArrow = this.props['left-arrow'];
        const leftText = this.props['left-text'];
        const rightText = this.props['right-text'];
        const rightIcon = this.props['right-icon'];
        const zIndex = this.props['z-index'] || '999';

        const cls = classNames({
            'nj-nav-bar': true,
            'nj-hairline': true,
            'nj-hairline--bottom': true,
            'nj-nav-bar--fixed': fixed
        });

        let rightEl;
        if (rightText) {
            rightEl = <div className='nj-nav-bar__text'>{rightText}</div>;
        }
        if (rightIcon) {
            rightEl = <Icon name={rightIcon} />;
        }
        return (
            <div className={cls} style={{ zIndex: zIndex }}>
                <div className='nj-nav-bar__left' onClick={onLeftClick}>
                    {leftArrow && <Icon name='arrow' className='nj-nav-bar__arrow' />}

                    {leftText && <div className='nj-nav-bar__text'>{leftText}</div>}
                </div>

                <div className='nj-nav-bar__title'>{title}</div>

                <div className='nj-nav-bar__right' onClick={onRightClick}>
                    {rightEl}
                </div>
            </div>
        );
    }
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    'left-arrow': PropTypes.bool,
    'left-text': PropTypes.string,
    'right-text': PropTypes.string,
    'right-icon': PropTypes.string,
    fixed: PropTypes.bool,
    'z-index': PropTypes.string,
    onLeftClick: PropTypes.func,
    onRightClick: PropTypes.func
};
NavBar.defaultProps = {};

export default NavBar;
