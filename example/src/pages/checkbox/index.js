import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Checkbox, NavBar } from 'njui-mobile';

const CheckboxGroup = Checkbox.Group;
class CheckboxPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fruits: ['apple']
        };
    }

    render() {
        const { fruits } = this.state;
        return (
            <div className='page'>
                <NavBar left-icon='left' title='Checkbox' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div className='demo-block__row'>
                        <p>你喜欢的水果:</p>
                        <CheckboxGroup
                            value={fruits}
                            onChange={fruits => this.setState({ fruits })}
                        >
                            <Checkbox value='apple'>苹果</Checkbox>
                            <Checkbox value='banana'>香蕉</Checkbox>
                            <Checkbox value='peach'>桃子</Checkbox>
                            <Checkbox value='watermelon'>西瓜</Checkbox>
                        </CheckboxGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>选型内联</div>
                    <div className='demo-block__row'>
                        <p>你喜欢的水果:</p>
                        <CheckboxGroup
                            inline
                            value={fruits}
                            onChange={fruits => this.setState({ fruits })}
                        >
                            <Checkbox value='apple'>苹果</Checkbox>
                            <Checkbox value='banana'>香蕉</Checkbox>
                            <Checkbox value='peach'>桃子</Checkbox>
                            <Checkbox value='watermelon' disabled>西瓜</Checkbox>
                        </CheckboxGroup>
                    </div>
                </div>
            </div>
        );
    }
}

CheckboxPage.propTypes = {};
CheckboxPage.defaultProps = {};

export default CheckboxPage;
