import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';

class Row extends Component {
    render() {
        const { gutter, type, justify, children } = this.props;

        const cls = classNames({
            'nj-row': true,
            'nj-row--flex': type === 'flex',
            'nj-row--justify-center': justify === 'center',
            'nj-row--justify-end': justify === 'end',
            'nj-row--justify-space-between': justify === 'space-between',
            'nj-row--justify-space-around': justify === 'space-around'

        });

        const margin = `-${Number(gutter / 2)}px`;
        const sty = gutter ? { marginLeft: margin, marginRight: margin } : {};

        // Pass props to children
        // https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { gutter }));
        return (
            <div className={cls} style={sty}>{childrenWithProps}</div>
        );
    }
}

Row.propTypes = {
    gutter: PropTypes.number,
    type: PropTypes.string,
    justify: PropTypes.oneOf(['center', 'end', 'space-between', 'space-around']),
    children: PropTypes.node
};
Row.defaultProps = {};

export default Row;
