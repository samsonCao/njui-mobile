import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { NavBar, Progress } from 'njui-mobile';

class ProgressPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-icon='left' title='Progress' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div className='demo-block__row'>
                        <Progress percent={50} />
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>自定义样式</div>
                    <div className='demo-block__row' style={{ paddingBottom: '30px' }}>
                        <Progress color='#f2826a' percent={20} />
                    </div>
                    <div className='demo-block__row' style={{ paddingBottom: '30px' }}>
                        <Progress pivot-text='红色' color='#f3594b' percent={30} />
                    </div>
                    <div className='demo-block__row' style={{ paddingBottom: '30px' }}>
                        <Progress pivot-text='紫色' pivot-color='#fff' color='linear-gradient(to right, #be99ff, #7232dd)' percent={40} />
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>置灰</div>
                    <div className='demo-block__row'>
                        <Progress percent={50} color='#cacaca' />
                    </div>
                </div>
            </div>
        );
    }
}

ProgressPage.propTypes = {};
ProgressPage.defaultProps = {};

export default ProgressPage;
