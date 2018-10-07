import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Icon, NavBar, Col } from 'njui-mobile';

class IconPage extends Component {
    render() {
        const f28 = { fontSize: '28px' };
        const icons = [
            // our icon
            'home',
            'shop',
            'category',
            'me',
            'star',
            'arrow-down',
            'to-top',

            // 图表来源
            // http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=317
            'sort',
            'menu',
            'upload',
            'setting',
            'delete',
            'close',
            'arrow-up',
            'arrow-down',
            'check',
            'star',
            'star-fill',
            'search',
            'refresh',
            'loading',
            'up',
            'down',
            'left',
            'right',
            'more',
            'share',
            'checkbox',
            'checkbox-fill',
            'radio',
            'radio-fill',
            'info-fill',
            'info-circle',
            'plus'
        ];
        const colors = [
            '#f44336',
            '#e91e63',
            '#9c27b0',
            '#673ab7',
            '#3f51b5',
            '#2196f3',
            '#00bcd4'
        ];
        return (
            <div className='page'>
                <NavBar left-icon='left' title='Icon' fixed onLeftClick={() => window.history.go(-1)} />
                <div className='demo-block'>
                    <div className='demo-block__title'>图标库</div>
                    <div className='nj-clearfix'>
                        {icons.map(item => (
                            <Col span={8} key={item}>
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <Icon name={item} style={f28} />
                                    <div style={{ fontSize: '12px', lineHeight: '30px' }}>icon-{item}</div>
                                </div>
                            </Col>
                        ))}
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>Loading</div>
                    <div className='demo-block__row'>
                        <Icon name='loading' className='nj__loading' style={f28} />
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>颜色</div>
                    <div className='demo-block__row'>
                        {colors.map(item => <Icon name='home' key={item} style={{ ...f28, color: item }} />)}
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>大小</div>
                    <div className='demo-block__row'>
                        <Icon name='home' style={{ fontSize: '20px' }} />
                        <Icon name='home' style={{ fontSize: '40px' }} />
                        <Icon name='home' style={{ fontSize: '60px' }} />
                    </div>
                </div>
            </div>
        );
    }
}

IconPage.propTypes = {};
IconPage.defaultProps = {};

export default IconPage;
