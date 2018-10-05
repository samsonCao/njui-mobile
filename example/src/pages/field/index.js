import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar, Cell, Field, Button } from 'njui-mobile';

const CellGroup = Cell.Group;

class FieldPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-text='返回' title='Field' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <CellGroup>
                            <Field
                                placeholder='请输入手机号'
                            />
                        </CellGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>自定义类型</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <CellGroup>
                            <Field
                                required
                                clearable
                                label='用户名'
                                placeholder='请输入用户名'
                            />
                            <Field
                                type='password'
                                required
                                clearable
                                label='密码'
                                placeholder='请输入密码'
                            />
                        </CellGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>禁用输入框</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <CellGroup>
                            <Field
                                disabled
                                placeholder='输入框已禁用'
                            />
                        </CellGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>高度自适应</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <CellGroup>
                            <Field
                                label='留言'
                                type='textarea'
                                placeholder='请输入留言'
                            />
                        </CellGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>插入按钮</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <CellGroup>
                            <Field
                                label='短信验证码'
                                type='input'
                                placeholder='请输入短信验证码'
                                button={<Button size='small' type='primary'>发送验证码</Button>}
                            />
                        </CellGroup>
                    </div>
                </div>
            </div>
        );
    }
}

FieldPage.propTypes = {};
FieldPage.defaultProps = {};

export default FieldPage;
