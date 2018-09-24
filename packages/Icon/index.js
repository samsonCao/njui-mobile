import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';

class Icon extends Component {
    render() {
        // TODO: Size prop should be remove @liuzhiyuan
        const { name, color, size, className, ...others } = this.props;
        const cls = classNames({
            'nj-icon': true,
            ['nj-icon-' + name]: true,
            [className]: className
        });
        const sty = {
            color: color,
            fontSize: size
        };
        return (
            <i {...others} className={cls} style={sty} />
        );
    }
}

Icon.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string
};
Icon.defaultProps = {};

export default Icon;
