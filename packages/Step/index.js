import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';
import Item from './Item';

class Step extends Component {
    render() {
        const { direction = 'horizontal', activeIndex, children, ...others } = this.props;
        const cls = classNames({
            'nj-step': true,
            'nj-step--horizontal': direction === 'horizontal',
            'nj-step--vertical': direction === 'vertical'
        });

        // Pass props to children
        const childrenWithProps = React.Children.map(children, child => {
            return React.cloneElement(child, {
                direction: direction,
                activeIndex: activeIndex
            });
        });
        return (
            <div className={cls} {...others}>
                <div className='nj-steps__items nj-steps__items--alone'>
                    {childrenWithProps}
                </div>
            </div>
        );
    }
}

Step.propTypes = {
    direction: PropTypes.string,
    activeIndex: PropTypes.number,
    children: PropTypes.node
};
Step.defaultProps = {};

Step.Item = Item;
export default Step;
