import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import Icon from '../Icon';
import Info from '../Info';

class Item extends Component {
    render() {
        const { active, icon, dot, info, children, ...others } = this.props;
        const cls = classNames({
            'nj-tabbar-item': true,
            'nj-tabbar-item--active': active
        });
        return (
            <div className={cls} {...others}>
                <div className='nj-tabbar-item__icon'>
                    <Icon name={icon} />
                    {dot && <div className='nj-tabbar-item__icon--dot' />}

                    {info && <Info>{info}</Info>}
                </div>
                <div className='nj-tabbar-item__text'>{children}</div>
            </div>
        );
    }
}

Item.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string,
    dot: PropTypes.bool,
    info: PropTypes.string,
    children: PropTypes.node
};
Item.defaultProps = {};

export default Item;
