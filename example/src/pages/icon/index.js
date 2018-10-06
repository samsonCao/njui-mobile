import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Icon, NavBar } from 'njui-mobile';

class IconPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-text='返回' title='Icon' fixed onLeftClick={() => window.history.go(-1)} />
                <div className='demo-block'>
                    <div className='demo-block__title'>图标库</div>
                    <div className='demo-block__row'>
                        <Icon name='home' style={{ fontSize: '18px' }} />
                        <Icon name='shop' style={{ fontSize: '18px' }} />
                        <Icon name='me' style={{ fontSize: '18px' }} />
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>颜色</div>
                    <div className='demo-block__row'>
                        <Icon name='home' style={{ fontSize: '40px', color: '#f44336' }} />
                        <Icon name='home' style={{ fontSize: '40px', color: '#e91e63' }} />
                        <Icon name='home' style={{ fontSize: '40px', color: '#9c27b0' }} />
                        <Icon name='home' style={{ fontSize: '40px', color: '#673ab7' }} />
                        <Icon name='home' style={{ fontSize: '40px', color: '#3f51b5' }} />
                        <Icon name='home' style={{ fontSize: '40px', color: '#2196f3' }} />
                        <Icon name='home' style={{ fontSize: '40px', color: '#03a9f4' }} />
                        <Icon name='home' style={{ fontSize: '40px', color: '#00bcd4' }} />
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
