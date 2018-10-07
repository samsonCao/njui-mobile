import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';
import Icon from '../Icon';
import Group from './Group';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.onCheckboxClick = this.onCheckboxClick.bind(this);

        const { current, value } = props;
        console.log(props);
        this.state = {
            checked: current.includes(value)
        };
    }

    onCheckboxClick() {
        const { checked } = this.state;
        const { current, value, onChange, disabled } = this.props;
        const newChecked = !checked;

        if (disabled) return false;

        /**
         * 新数组
         */
        let newCurrent;
        if (newChecked) {
            newCurrent = [...current, value];
        } else {
            newCurrent = current.filter(item => item !== value);
        }
        console.log(newCurrent);
        this.setState({
            checked: newChecked
        }, () => onChange(newCurrent));
    }

    render() {
        const { current, value, disabled, children } = this.props;
        const cls = classNames({
            'nj-checkbox': true,
            'no-select': true,
            'nj-checkbox--disabled': disabled
        });

        let iconName;
        if (current && current.includes(value)) {
            iconName = 'checkbox-fill';
        } else {
            iconName = 'checkbox';
        }
        return (
            <div className={cls} onClick={this.onCheckboxClick}>
                <Icon style={{ fontSize: '20px' }} name={iconName} />
                <span>{children}</span>
            </div>
        );
    }
}

Checkbox.propTypes = {
    current: PropTypes.array,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.node
};
Checkbox.defaultProps = {};

Checkbox.Group = Group;
export default Checkbox;
