import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { NavBar } from 'njui-mobile';

class NavBarPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-icon='left' title='NavBar' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <NavBar
                            left-arrow
                            left-icon='left'
                            title='标题'
                            right-text='按钮'
                            onLeftClick={() => window.alert('Click Left')}
                            onRightClick={() => window.alert('Click Right')}
                        />
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>高级用法</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <NavBar left-arrow left-icon='left' title='标题' right-text='按钮' right-icon='search' />
                    </div>
                </div>
            </div>
        );
    }
}

NavBarPage.propTypes = {};
NavBarPage.defaultProps = {};

export default NavBarPage;
