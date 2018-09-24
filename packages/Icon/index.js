import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';

class Icon extends Component {
    render() {
        // TODO: size 需要调整 @liuzhiyuan
        const { name, color, size, ...others } = this.props;
        const cls = classNames({
            'nj-icon': true,
            ['nj-icon-' + name]: true
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
