import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Cell, NavBar } from 'njui-mobile';

const CellGroup = Cell.Group;

class CellPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-icon='left' title='Cell' fixed onLeftClick={() => window.history.go(-1)} />
                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <CellGroup>
                            <Cell title='单元格' value='内容' />
                            <Cell title='单元格' value='内容' label='描述信息' />
                        </CellGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>只设置 value</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <CellGroup>
                            <Cell value='内容' />
                        </CellGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>展示图标</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <CellGroup>
                            <Cell title='单元格' value='内容' icon='home' />
                        </CellGroup>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>展示箭头</div>
                    <div className='demo-block__row' style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                        <CellGroup>
                            <Cell title='单元格' value='内容' arrow-direction='up' />
                            <Cell title='单元格' value='内容' arrow-direction='right' />
                            <Cell title='单元格' value='内容' arrow-direction='down' />
                            <Cell title='单元格' value='内容' arrow-direction='left' />
                        </CellGroup>
                    </div>
                </div>
            </div>
        );
    }
}

CellPage.propTypes = {};
CellPage.defaultProps = {};

export default CellPage;
