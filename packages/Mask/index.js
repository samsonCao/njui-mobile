import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';

class Mask extends Component {
    render() {
        const { transparent, className, ...others } = this.props;
        const cls = classNames({
            'nj-mask': true,
            'nj-mask--transparent': transparent,
            [className]: className
        });
        return (
            <div className={cls} {...others} />
        );
    }
}

Mask.propTypes = {
    transparent: PropTypes.bool
};
Mask.defaultProps = {};

export default Mask;
