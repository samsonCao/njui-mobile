import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import CellGroup from './CellGroup';
import './index.scss';
import classNames from '../utils/classnames';

class Cell extends Component {
    render() {
        const { required, title, value, icon, label, className, children } = this.props;
        const arrowDirection = this.props['arrow-direction'];

        const cls = classNames({
            'nj-cell': true,
            'nj-cell--required': required,
            [className]: className
        });
        const labelEl = label && <div className='nj-cell__label'>{label}</div>;
        let rightIcon;
        if (arrowDirection) {
            let arrowCls = classNames({
                'nj-cell__right-icon': true,
                ['nj-cell__right-icon--' + arrowDirection]: arrowDirection
            });
            rightIcon = <Icon className={arrowCls} name='arrow' />;
        }
        return (
            <div className={cls}>
                {icon && <Icon className='nj-cell__left-icon' name={icon} />}

                {title && <div className='nj-cell__title'><span>{title}{labelEl}</span></div>}

                {children && <div className='nj-cell__value'>{children}</div>}

                {value && <div className='nj-cell__value'>{value}</div>}

                {rightIcon}
            </div>
        );
    }
}

Cell.propTypes = {
    required: PropTypes.bool,
    className: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    'arrow-direction': PropTypes.oneOf(['up', 'down', 'left', 'right']),
    children: PropTypes.node
};
Cell.defaultProps = {};

Cell.Group = CellGroup;
export default Cell;
