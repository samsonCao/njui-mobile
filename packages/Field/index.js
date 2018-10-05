import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils';
import './index.scss';
import Cell from '../Cell';
import Icon from '../Icon';

class Field extends Component {
    render() {
        const {
            placeholder,
            label,
            required,
            type = 'text',
            clearable,
            disabled,
            button,
            ...others
        } = this.props;
        const cls = classNames({
            'nj-field__control': true
        });
        const controlProps = {
            className: cls,
            placeholder,
            type,
            disabled,
            ...others
        };

        // TODO: auto resize textarea height @liuzhiyuan
        // TODO: add clear icon @liuzhiyuan
        return (
            <Cell
                required={required}
                className={type === 'textarea' ? 'nj-field' : 'nj-field nj-cell--center'}
                title={label}
            >
                <div className='nj-field__body'>
                    {type === 'textarea' ? (
                        <textarea {...controlProps} />
                    ) : (
                        <input {...controlProps} />
                    )}

                    {clearable && <Icon className='nj-field__clear' name='clear' />}

                    {button && <div className='nj-field__button'>{button}</div>}
                </div>
            </Cell>
        );
    }
}

Field.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    clearable: PropTypes.bool,
    disabled: PropTypes.bool,
    button: PropTypes.node
};
Field.defaultProps = {};

export default Field;
