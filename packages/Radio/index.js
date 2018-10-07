import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';
import Icon from '../Icon';
import Group from './Group';

class Radio extends Component {
    render() {
        const { style, className, current, value, children, disabled, onChange } = this.props;
        const cls = classNames({
            'nj-radio': true,
            'no-select': true,
            'nj-radio--disabled': disabled,
            [className]: className
        });

        const iconName = current === value ? 'radio-fill' : 'radio';
        return (
            <div
                style={style}
                className={cls}
                onClick={() => {
                    if (disabled) {
                        // pass
                    } else {
                        onChange(value);
                    }
                }}
            >
                <Icon style={{ fontSize: '20px' }} name={iconName} />
                <span>{children}</span>
            </div>
        );
    }
}

Radio.propTypes = {
    className: PropTypes.object,
    style: PropTypes.object,
    current: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node
};
Radio.defaultProps = {};

Radio.Group = Group;
export default Radio;
