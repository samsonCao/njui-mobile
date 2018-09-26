import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Icon } from 'njui-mobile';
import logoUrl from '../../assets/logo.png';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menus: [
                {
                    label: '基础组件',
                    open: false,
                    children: [
                        {
                            label: 'Layout 布局',
                            path: '/layout'
                        },
                        {
                            label: 'Badge 徽章',
                            path: '/badge'
                        },
                        {
                            label: 'Button 按钮',
                            path: '/button'
                        },
                        {
                            label: 'Cell 单元格',
                            path: '/cell'
                        },
                        {
                            label: 'Icon 图标',
                            path: '/icon'
                        },
                        {
                            label: 'Modal 模态框',
                            path: '/modal'
                        },
                        {
                            label: 'NavBar 导航',
                            path: '/nav-bar'
                        },
                        {
                            label: 'Pagination 分页',
                            path: '/pagination'
                        },
                        {
                            label: 'Progress 进度条',
                            path: '/progress'
                        },
                        {
                            label: 'Step 步骤条',
                            path: '/step'
                        },
                        {
                            label: 'Swipe 轮播',
                            path: '/swipe'
                        },
                        {
                            label: 'Tab 标签页',
                            path: '/tab'
                        },
                        {
                            label: 'Tag 标记',
                            path: '/tag'
                        },
                        {
                            label: 'TabBar 标签栏',
                            path: '/tab-bar'
                        }
                    ]
                },
                {
                    label: '表单组件',
                    open: false,
                    children: [
                        {
                            label: 'Checkbox 复选框',
                            path: '/checkbox'
                        },
                        {
                            label: 'Field 输入框',
                            path: '/checkbox'
                        },
                        {
                            label: 'NumberKeyboard 数字键盘',
                            path: '/number-keyboard'
                        },
                        {
                            label: 'PasswordInput 密码输入框',
                            path: '/password-input'
                        },
                        {
                            label: 'Radio 单选框',
                            path: '/radio'
                        },
                        {
                            label: 'Rate 评分',
                            path: '/rate'
                        },
                        {
                            label: 'Search 搜索',
                            path: '/search'
                        },
                        {
                            label: 'Slider 滑块',
                            path: '/slider'
                        },
                        {
                            label: 'Stepper 步进器',
                            path: '/stepper'
                        },
                        {
                            label: 'Switch 开关',
                            path: '/switch'
                        },
                        {
                            label: 'Uploader 图片上传',
                            path: '/uploader'
                        }
                    ]
                },
                {
                    label: '操作反馈',
                    open: false,
                    children: [
                        {
                            label: 'ActionSheet 上拉菜单',
                            path: '/action-sheet'
                        },
                        {
                            label: 'DatetimePicker 时间选择',
                            path: '/datetime-picker'
                        },
                        {
                            label: 'Picker 选择器',
                            path: '/picker'
                        },
                        {
                            label: 'PullRefresh 下拉刷新',
                            path: '/pull-refresh'
                        },
                        {
                            label: 'Toast 提示',
                            path: '/toast'
                        },
                        {
                            label: 'Modal 模态框',
                            path: '/modal'
                        }
                    ]
                },
                {
                    label: '业务组件',
                    open: false,
                    badge: <b style={{ color: '#4CAF50', fontSize: '12px', marginLeft: '10px' }}>NEW!</b>,
                    children: [
                        {
                            label: 'Card 卡片',
                            path: '/card'
                        }
                    ]
                }
            ]
        };
    }

    /**
     * Toggle Menu
     * @param index
     */
    toggleMenu = (index) => {
        const { menus } = this.state;
        const result = [];

        menus.forEach((item, i) => {
            if (index === i) {
                item.open = !item.open;
            }
            result.push(item);
        });
        this.setState({
            menus: result
        });
    };

    render() {
        const { menus } = this.state;
        return (
            <div className='page page__padding'>
                <div className='page__title'>
                    <div className='page__title--logo'>
                        <img src={logoUrl} alt='' />
                        <span>njui-mobile</span>
                    </div>
                    <div className='page__title--desc'>轻量、高扩展的移动端 React 组件库</div>
                </div>
                <div className='page__body'>
                    {menus.map((menu, i) => {
                        return (
                            <div key={i} className='demo-list'>
                                <div className='demo-list__row'>
                                    <div className='demo-list__row--title' onClick={() => this.toggleMenu(i)}>
                                        <span>
                                            {menu.label}
                                            {menu.badge}
                                        </span>
                                        <Icon name='arrow' />
                                    </div>
                                    <div className='demo-list__row--body'>
                                        {menu.open && menu.children && menu.children.map((child, j) => {
                                            return (
                                                <Link to={child.path} key={j}>{child.label}</Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
