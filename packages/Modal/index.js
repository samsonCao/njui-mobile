import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mask from '../Mask';
import Button from '../Button';
import { classNames } from '../utils';
import './index.scss';

class Modal extends Component {
    render() {
        const { visible, title, okText, cancelText, children, onOk, onCancel, ...others } = this.props;
        if (!visible) return null;

        // TODO: Animation Support @liuzhiyuan
        const cls = classNames({
            'nj-modal': true
        });
        return [
            <div className={cls} key='modal'>
                {title && <div className='nj-modal__header'>{title}</div>}

                <div className='nj-modal__content'>
                    {children}
                </div>

                <div className='nj-hairline--top nj-modal__footer nj-modal__footer--buttons'>
                    {cancelText && (
                        <Button
                            type='default'
                            size='large'
                            className='nj-modal__cancel'
                            onClick={onCancel}
                        >{cancelText}</Button>
                    )}

                    <Button
                        type='default'
                        size='large'
                        className='nj-modal__ok nj-hairline--left'
                        onClick={onOk}
                    >{okText}</Button>
                </div>
            </div>,
            <Mask key='mask' />
        ];
    }
}

Modal.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    children: PropTypes.node
};
Modal.defaultProps = {};

export default Modal;
