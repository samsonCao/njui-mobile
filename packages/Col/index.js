import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';

class Col extends Component {
    render() {
        const { gutter, span, offset, children } = this.props;
        const cls = classNames({
            'nj-col': true,
            ['nj-col--' + span]: span,
            ['nj-col--offset-' + offset]: offset
        });
        const padding = `${gutter / 2}px`;
        const sty = gutter ? { paddingLeft: padding, paddingRight: padding } : {};
        return (
            <div className={cls} style={sty}>{children}</div>
        );
    }
}

Col.propTypes = {
    gutter: PropTypes.number,
    span: PropTypes.number,
    offset: PropTypes.number,
    children: PropTypes.node
};
Col.defaultProps = {};

export default Col;
