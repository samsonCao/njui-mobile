import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Button, NavBar } from 'njui-mobile';

class ButtonPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-icon='left' title='Button' fixed onLeftClick={() => window.history.go(-1)} />
                <div className='demo-block'>
                    <div className='demo-block__title'>按钮类型</div>
                    <div className='demo-block__row'>
                        <Button>默认按钮</Button>
                        <Button type='primary'>主要按钮</Button>
                    </div>
                    <div className='demo-block__row'>
                        <Button type='warning'>警告按钮</Button>
                        <Button type='danger'>危险按钮</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>朴素按钮</div>
                    <div className='demo-block__row'>
                        <Button plain>默认按钮</Button>
                        <Button plain type='primary'>主要按钮</Button>
                    </div>
                    <div className='demo-block__row'>
                        <Button plain type='warning'>警告按钮</Button>
                        <Button plain type='danger'>危险按钮</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>按钮尺寸</div>
                    <div className='demo-block__row'>
                        <Button size='large'>大号按钮</Button>
                    </div>
                    <div className='demo-block__row'>
                        <Button size='normal'>普通按钮</Button>
                        <Button size='small'>小型按钮</Button>
                        <Button size='mini'>迷你按钮</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>禁用状态</div>
                    <div className='demo-block__row'>
                        <Button disabled>禁用按钮</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>点击事件</div>
                    <div className='demo-block__row'>
                        <Button onClick={() => window.alert('You clicked me!')}>Click</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>加载状态</div>
                    <div className='demo-block__row'>
                        <Button loading>加载中</Button>
                    </div>
                </div>
            </div>
        );
    }
}

ButtonPage.propTypes = {};
ButtonPage.defaultProps = {};

export default ButtonPage;
