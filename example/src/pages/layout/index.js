import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { NavBar, Row, Col } from 'njui-mobile';

class LayoutPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-text='返回' title='Layout' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div className='demo-block__row'>
                        <Row>
                            <Col span={8}>span: 8</Col>
                            <Col span={8}>span: 8</Col>
                            <Col span={8}>span: 8</Col>
                        </Row>

                        <Row>
                            <Col span={4}>span: 4</Col>
                            <Col span={10} offset={4}>offset: 4 span: 10</Col>
                        </Row>

                        <Row>
                            <Col span={12} offset={12}>offset: 12 span: 12</Col>
                        </Row>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>在列元素之间增加间距</div>
                    <div className='demo-block__row'>
                        <Row gutter={20}>
                            <Col span={8}>span: 8</Col>
                            <Col span={8}>span: 8</Col>
                            <Col span={8}>span: 8</Col>
                        </Row>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>Flex 布局</div>
                    <div className='demo-block__row'>
                        <Row type='flex'>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                        </Row>
                        <Row type='flex' justify='center'>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                        </Row>
                        <Row type='flex' justify='end'>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                        </Row>
                        <Row type='flex' justify='space-between'>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                        </Row>
                        <Row type='flex' justify='space-around'>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                            <Col span={6}>span: 6</Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

LayoutPage.propTypes = {};
LayoutPage.defaultProps = {};

export default LayoutPage;
