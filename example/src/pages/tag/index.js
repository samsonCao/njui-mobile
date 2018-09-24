import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar, Tag } from 'njui-mobile';

class TagPage extends Component {
    render() {
        return (
            <div className='page'>
                <NavBar left-arrow title='Tag' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>基础用法</div>
                    <div className='demo-block__row'>
                        <Tag>标签</Tag>
                        <Tag type='danger'>标签</Tag>
                        <Tag type='success'>标签</Tag>
                        <Tag type='primary'>标签</Tag>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>空心样式</div>
                    <div className='demo-block__row'>
                        <Tag plain>标签</Tag>
                        <Tag plain type='danger'>标签</Tag>
                        <Tag plain type='success'>标签</Tag>
                        <Tag plain type='primary'>标签</Tag>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>圆角样式</div>
                    <div className='demo-block__row'>
                        <Tag mark>标签</Tag>
                        <Tag mark type='danger'>标签</Tag>
                        <Tag mark type='success'>标签</Tag>
                        <Tag mark type='primary'>标签</Tag>
                    </div>
                </div>
            </div>
        );
    }
}

TagPage.propTypes = {};
TagPage.defaultProps = {};

export default TagPage;
