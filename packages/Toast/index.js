import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from 'rmc-notification';
import Icon from '../Icon';
import { classNames } from '../utils';
import './index.scss';

let toastIns;
const prefixCls = 'nj-toast';

function getMessageInstance(mask, callback) {
    if (toastIns) {
        toastIns.destroy();
        toastIns = null;
    }

    Notification.newInstance({
        prefixCls,
        style: {},
        transitionName: 'cbk-fade',
        className: classNames({
            [`${prefixCls}--mask`]: mask,
            [`${prefixCls}--nomask`]: !mask
        })
    }, (notification) => callback && callback(notification));
}

function notice(content, type, duration, onClose, mask = true) {
    const iconTypes = {
        info: '',
        success: 'success',
        fail: 'fail',
        offline: 'frown-o',
        loading: 'loading'
    };
    const iconType = iconTypes[type];

    getMessageInstance(mask, notification => {
        toastIns = notification;

        notification.notice({
            duration,
            style: {},
            content: iconType ? (
                <div
                    className={`${prefixCls}__text ${prefixCls}-text-icon`}
                    role='alert'
                    aria-live='assertive'
                    style={{ padding: '20px' }}
                >
                    <Icon name={iconType} size='40px' />
                    <div className={`${prefixCls}-text-info`}>{content}</div>
                </div>
            ) : (
                <div className={`${prefixCls}__text`} role='alert' aria-live='assertive'>
                    <div>{content}</div>
                </div>
            ),
            closable: true,
            onClose() {
                if (onClose) {
                    onClose();
                }
                notification.destroy();
                notification = null;
                toastIns = null;
            }
        });
    });
}

export default {
    show(content, duration, mask) {
        return notice(content, 'info', duration, () => {}, mask);
    },
    info(content, duration, onClose, mask) {
        return notice(content, 'info', duration, onClose, mask);
    },
    success(content, duration, onClose, mask) {
        return notice(content, 'success', duration, onClose, mask);
    },
    fail(content, duration, onClose, mask) {
        return notice(content, 'fail', duration, onClose, mask);
    },
    offline(content, duration, onClose, mask) {
        return notice(content, 'offline', duration, onClose, mask);
    },
    loading(content, duration, onClose, mask) {
        return notice(content, 'loading', duration, onClose, mask);
    },
    hide() {
        if (toastIns) {
            toastIns.destroy();
            toastIns = null;
        }
    }
};
