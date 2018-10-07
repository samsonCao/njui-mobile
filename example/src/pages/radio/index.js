import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Radio, NavBar } from 'njui-mobile';

const RadioGroup = Radio.Group;
class CheckboxPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: 'beijing'
        };
    }

    render() {
        const { address } = this.state;
        return (
            <div className='page'>
                <NavBar left-icon='left' title='Radio' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div className='demo-block__row'>
                        <RadioGroup
                            value={address}
                            onChange={address => this.setState({ address })}
                        >
                            <Radio value='beijing'>北京</Radio>
                            <Radio value='shanghai'>上海</Radio>
                            <Radio value='shenzhen'>深圳</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>选项内联</div>
                    <div className='demo-block__row'>
                        <RadioGroup
                            inline
                            value={address}
                            onChange={address => this.setState({ address })}
                        >
                            <Radio value='beijing'>北京</Radio>
                            <Radio value='shanghai'>上海</Radio>
                            <Radio value='shenzhen'>深圳</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>禁用</div>
                    <div className='demo-block__row'>
                        <RadioGroup
                            value={address}
                            onChange={address => this.setState({ address })}
                        >
                            <Radio value='beijing'>北京</Radio>
                            <Radio value='shanghai'>上海</Radio>
                            <Radio value='shenzhen' disabled>深圳</Radio>
                        </RadioGroup>
                    </div>
                </div>
            </div>
        );
    }
}

CheckboxPage.propTypes = {};
CheckboxPage.defaultProps = {};

export default CheckboxPage;
