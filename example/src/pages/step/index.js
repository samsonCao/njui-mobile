import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { NavBar, Step, Button } from 'njui-mobile';

class StepPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    prevStep = () => {
        const { activeIndex } = this.state;
        let newIndex;
        if (activeIndex === 0) {
            newIndex = 3;
        } else {
            newIndex = activeIndex - 1;
        }
        this.setState({
            activeIndex: newIndex
        });
    };

    nextStep = () => {
        const { activeIndex } = this.state;
        let newIndex;
        if (activeIndex === 3) {
            newIndex = 0;
        } else {
            newIndex = activeIndex + 1;
        }
        this.setState({
            activeIndex: newIndex
        });
    };

    render() {
        const { activeIndex } = this.state;
        return (
            <div className='page'>
                <NavBar left-icon='left' title='Step' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <Step activeIndex={activeIndex}>
                            <Step.Item index={0} title='买家下单' />
                            <Step.Item index={1} title='商家接单' />
                            <Step.Item index={2} title='买家提货' />
                            <Step.Item index={3} title='交易完成' />
                        </Step>
                    </div>
                    <div className='demo-block__row'>
                        <Button size='small' onClick={this.prevStep}>上一步</Button>
                        <Button size='small' onClick={this.nextStep}>下一步</Button>
                    </div>
                </div>
            </div>
        );
    }
}

StepPage.propTypes = {};
StepPage.defaultProps = {};

export default StepPage;
