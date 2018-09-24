import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Button, NavBar, Toast } from 'njui-mobile';

class ToastPage extends Component {
    showToast = () => {
        Toast.success('Hello World', 3);
    };

    render() {
        return (
            <div className='page'>
                <NavBar left-arrow title='Toast' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>文字提示</div>
                    <div className='demo-block__row'>
                        <Button plain onClick={() => Toast.show('我是提示文案，建议不超过十五字~')}>文字提示</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>加载提示</div>
                    <div className='demo-block__row'>
                        <Button plain>TODO</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>成功/失败</div>
                    <div className='demo-block__row'>
                        <Button plain onClick={() => Toast.success('提示文案')}>成功提示</Button>
                        <Button plain onClick={() => Toast.fail('提示文案')}>失败提示</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>自定义展示时长</div>
                    <div className='demo-block__row'>
                        <Button plain onClick={() => Toast.show('提示文案会在10秒后关闭', 10)}>文字提示</Button>
                    </div>
                </div>
            </div>
        );
    }
}

ToastPage.propTypes = {};
ToastPage.defaultProps = {};

export default ToastPage;
