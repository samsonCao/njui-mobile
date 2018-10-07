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
            'to_top',

            // ant icon
            'message',
            'up',
            'right',
            'down',
            'left',
            'question-circle',
            'plus',
            'plus-circle'
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
                                    <div style={{ fontSize: '12px' }}>icon-{item}</div>
                                </div>
                            </Col>
                        ))}
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>颜色</div>
                    <div className='demo-block__row'>
                        {colors.map(item => <Icon name='home' key={item} style={{ fontSize: '40px', color: item }} />)}
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
