import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { NavBar, TabBar } from 'njui-mobile';

class TabBarPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-text='返回' title='TabBar' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div
                        className='demo-block__row'
                        style={{ marginLeft: '-15px', marginRight: '-15px' }}
                    >
                        <TabBar>
                            <TabBar.Item active icon='home'>
                                标签
                            </TabBar.Item>
                            <TabBar.Item icon='chat' dot onClick={() => window.alert('You clicked me!')}>
                                标签
                            </TabBar.Item>
                            <TabBar.Item icon='records' info='10'>
                                标签
                            </TabBar.Item>
                            <TabBar.Item
                                value='contact'
                                icon='contact'
                                info='...'
                            >
                                标签
                            </TabBar.Item>
                        </TabBar>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>点击事件</div>
                    <div
                        className='demo-block__row'
                        style={{ marginLeft: '-15px', marginRight: '-15px' }}
                    >
                        <TabBar>
                            <TabBar.Item active icon='home'>
                                标签
                            </TabBar.Item>
                            <TabBar.Item icon='chat' onClick={() => window.alert('You clicked me!')}>
                                点击
                            </TabBar.Item>
                            <TabBar.Item icon='records'>
                                标签
                            </TabBar.Item>
                            <TabBar.Item icon='contact'>
                                标签
                            </TabBar.Item>
                        </TabBar>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>固定在底部</div>
                    <div
                        className='demo-block__row'
                        style={{ marginLeft: '-15px', marginRight: '-15px' }}
                    >
                        <div style={{ padding: '0 15px' }}>如下所示</div>
                        <TabBar fixed>
                            <TabBar.Item active icon='home'>
                                标签
                            </TabBar.Item>
                            <TabBar.Item icon='chat' dot>
                                标签
                            </TabBar.Item>
                            <TabBar.Item icon='records' info='10'>
                                标签
                            </TabBar.Item>
                            <TabBar.Item
                                icon='contact'
                                info='...'
                            >
                                标签
                            </TabBar.Item>
                        </TabBar>
                    </div>
                </div>
            </div>
        );
    }
}

TabBarPage.propTypes = {};
TabBarPage.defaultProps = {};

export default TabBarPage;
