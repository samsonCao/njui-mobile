import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Icon } from 'njui-mobile';

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
                            label: 'Button 按钮',
                            path: '/button'
                        },
                        {
                            label: 'Icon 图标',
                            path: '/icon'
                        },
                        {
                            label: 'Cell 单元格',
                            path: '/cell'
                        },
                        {
                            label: 'NavBar 导航',
                            path: '/nav-bar'
                        },
                        {
                            label: 'Toast 提示',
                            path: '/toast'
                        }
                    ]
                }
            ]
        };
    }

    /**
     * 切换Menu
     * @param index, 当前索引
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
                <div className='page__title'>首页</div>
                <div className='page__body'>
                    {menus.map((menu, i) => {
                        return (
                            <div key={i} className='demo-list'>
                                <div className='demo-list__row'>
                                    <div className='demo-list__row--title' onClick={() => this.toggleMenu(i)}>
                                        <span>{menu.label}</span>
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
