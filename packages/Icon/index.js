import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';

class Icon extends Component {
    render() {
        const { name, style = { fontSize: '16px' }, className, ...others } = this.props;
        const cls = classNames({
            'nj-icon': true,
            ['nj-icon-' + name]: true,
            [className]: className
        });
        return (
            <i {...others} className={cls} style={style} />
        );
    }
}

Icon.propTypes = {
    /**
     * 图标名称
     */
    name: PropTypes.string
};
Icon.defaultProps = {};

export default Icon;
