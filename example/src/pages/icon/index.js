import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Icon, NavBar } from 'njui-mobile';

class IconPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-arrow title='Icon' fixed onLeftClick={() => window.history.go(-1)} />
                <div className='demo-block'>
                    <div className='demo-block__title'>图标库</div>
                    <div className='demo-block__row'>
                        <Icon name='add-o' />
                        <Icon name='add2' />
                        <Icon name='close' />
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>颜色</div>
                    <div className='demo-block__row'>
                        <Icon name='close' color='#f44336' />
                        <Icon name='close' color='#e91e63' />
                        <Icon name='close' color='#9c27b0' />
                        <Icon name='close' color='#673ab7' />
                        <Icon name='close' color='#3f51b5' />
                        <Icon name='close' color='#2196f3' />
                        <Icon name='close' color='#03a9f4' />
                        <Icon name='close' color='#00bcd4' />
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>大小</div>
                    <div className='demo-block__row'>
                        <Icon name='close' size='20px' />
                        <Icon name='close' size='40px' />
                        <Icon name='close' size='60px' />
                    </div>
                </div>
            </div>
        );
    }
}

IconPage.propTypes = {};
IconPage.defaultProps = {};

export default IconPage;
