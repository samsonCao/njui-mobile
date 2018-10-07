import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';

const noop = () => {};

class Group extends Component {
    render() {
        const { inline, value, children, onChange } = this.props;

        // Pass props to children
        const childrenWithProps = React.Children.map(children, child => {
            return React.cloneElement(child, {
                current: value,
                onChange: onChange || noop
            });
        });
        const cls = classNames({
            'nj-checkbox__group': true,
            'nj-checkbox__group--inline': inline
        });
        return (
            <div className={cls}>{childrenWithProps}</div>
        );
    }
}

Group.propTypes = {
    inline: PropTypes.bool,
    value: PropTypes.array,
    onChange: PropTypes.func,
    children: PropTypes.node
};
Group.defaultProps = {};

export default Group;
