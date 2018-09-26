import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Mask from '../Mask';
import Button from '../Button';
import { classNames } from '../utils';
import './index.scss';

// TODO: Support Modal.success, Modal.info, etc... @liuzhiyuan
class Modal extends Component {
    constructor(props) {
        super(props);
        this.renderFooter = this.renderFooter.bind(this);
    }

    renderFooter() {
        const { footer, cancelText, okText, onCancel, onOk, loading } = this.props;
        if (footer) {
            // 自定义 Footer
            return (
                <div className='nj-hairline--top nj-modal__footer'>
                    {footer}
                </div>
            );
        }

        // 按钮类型 Footer
        return (
            <div className='nj-hairline--top nj-modal__footer nj-modal__footer--buttons'>
                {/* 取消按钮 */}
                {cancelText && (
                    <Button
                        type='default'
                        size='large'
                        className='nj-modal__cancel'
                        onClick={onCancel}
                    >{cancelText}</Button>
                )}

                {/* 确认按钮 */}
                <Button
                    loading={loading}
                    type='default'
                    size='large'
                    className='nj-modal__ok nj-hairline--left'
                    onClick={onOk}
                >{okText}</Button>
            </div>
        );
    }

    render() {
        const {
            className,
            style,
            visible,
            title,
            children,
            ...others
        } = this.props;
        if (!visible) {
            return null;
        }

        // TODO: Animation Support @liuzhiyuan
        const cls = classNames({
            'nj-modal': true,
            [className]: className
        });

        const bodyInner = document.getElementsByTagName('body')[0];
        return ReactDOM.createPortal([
            <div
                className={cls}
                style={style}
                key='modal'
                {...others}
            >
                {title && <div className='nj-modal__header'>{title}</div>}

                {children && <div className='nj-modal__content'>{children}</div>}

                {this.renderFooter()}
            </div>,
            <Mask key='mask' />
        ], bodyInner);
    }
}

Modal.propTypes = {
    /**
     * 样式名
     */
    className: PropTypes.string,
    /**
     * 内联样式
     */
    style: PropTypes.object,
    /**
     * 是否展示
     */
    visible: PropTypes.bool,
    /**
     * 标题
     */
    title: PropTypes.string,
    /**
     * 底部
     */
    footer: PropTypes.object,
    /**
     * 确认按钮加载状态
     */
    loading: PropTypes.bool,
    /**
     * 确认按钮文字
     */
    okText: PropTypes.string,
    /**
     * 取消按钮文字
     */
    cancelText: PropTypes.string,
    /**
     * 点击确认按钮后的回调函数
     */
    onOk: PropTypes.func,
    /**
     * 点击取消按钮后的回调函数
     */
    onCancel: PropTypes.func,
    children: PropTypes.node
};
Modal.defaultProps = {};

export default Modal;
