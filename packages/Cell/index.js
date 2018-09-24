import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import CellGroup from './CellGroup';
import './index.scss';
import classNames from '../utils/classnames';

class Cell extends Component {
    render() {
        const { title, value, icon, label, children } = this.props;
        const arrowDirection = this.props['arrow-direction'] || 'right';

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
            <div className='nj-cell'>
                {icon && <Icon className='nj-cell__left-icon' name={icon} />}

                {title && <div className='nj-cell__title'>{title}{labelEl}</div>}

                {children}

                {value && <div className='nj-cell__value'>{value}</div>}

                {rightIcon}
            </div>
        );
    }
}

Cell.propTypes = {
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
