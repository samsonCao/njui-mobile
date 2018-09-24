import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import Icon from '../Icon';

class Item extends Component {
    render() {
        const { title, activeIndex, index, children, ...others } = this.props;
        const isFinish = index < activeIndex;
        const isProcess = index === activeIndex;
        const cls = classNames({
            'nj-step-item': true,
            'nj-step--finish': isFinish,
            'nj-step--process': isProcess,
            'nj-step-item--horizontal': true
        });
        console.log(this.props);
        return (
            <div className={cls} {...others}>
                <div className='nj-step__title'>{title}</div>

                {children}

                <div className='nj-step__circle-container'>
                    {isProcess ? <Icon name='checked' /> : <i className='nj-step__circle' />}
                </div>

                <div className='nj-step__line' />
            </div>
        );
    }
}

Item.propTypes = {
    title: PropTypes.string,
    activeIndex: PropTypes.number,
    index: PropTypes.number
};
Item.defaultProps = {};

export default Item;
