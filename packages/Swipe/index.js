import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import './index.scss';

/**
 * 轮播组件, 基于 nuka-carousel 封装
 *
 * https://github.com/FormidableLabs/nuka-carousel
 */
class Swipe extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.renderDots = this.renderDots.bind(this);

        this.state = {
            selectedIndex: props.selectedIndex
        };
    }

    onChange(index) {
        this.setState(
            {
                selectedIndex: index
            },
            () => {
                if (this.props.afterChange) {
                    this.props.afterChange(index);
                }
            }
        );
    }

    renderDots(props) {
        const { dots, dotStyle, dotActiveStyle } = this.props;
        if (!dots) {
            return null;
        }
        let indexes = [];
        for (let i = 0; i < props.slideCount; i++) {
            indexes.push(i);
        }
        return (
            <div className='nj-swipe__dots'>
                { indexes.map(index => (
                    <span
                        className='nj-swipe__dot'
                        style={(props.currentSlide === index) ? dotActiveStyle : dotStyle}
                        key={index}
                        onClick={() => props.goToSlide(index)}
                    />
                )) }
            </div>
        );
    }

    render() {
        const {
            autoplay,
            autoplayInterval,
            slideWidth,
            dotStyle,
            dotActiveStyle,
            vertical,
            swipeSpeed,
            infinite,
            withoutControls,
            selectedIndex,
            easing,
            cellSpacing,
            cellAlign,
            children
        } = this.props;

        const newProps = {
            autoplay,
            autoplayInterval,
            slideWidth,
            dotStyle,
            dotActiveStyle,
            vertical,
            swipeSpeed,
            withoutControls,
            easing,
            cellSpacing,
            cellAlign,
            slideIndex: selectedIndex,
            wrapAround: infinite,
            speed: swipeSpeed,
            arrows: 'false',
            afterSlide: this.onChange,
            renderBottomCenterControls: this.renderDots,

            // Remove Prev Button
            renderCenterLeftControls: () => {},
            // Remove Next Button
            renderCenterRightControls: () => {}
        };
        return (
            <Carousel
                {...newProps}
            >
                {children}
            </Carousel>
        );
    }
}

Swipe.propTypes = {
    /**
     * 是否自动播放, 默认为 false
     */
    autoplay: PropTypes.bool,
    /**
     * 自动播放时间间隔, 默认为 3秒
     */
    autoplayInterval: PropTypes.number,
    /**
     * 宽度, 单位为px
     */
    slideWidth: PropTypes.number,
    /**
     * 当前选中的索引
     */
    selectedIndex: PropTypes.number,
    /**
     * 缓动函数
     */
    easing: PropTypes.func,
    /**
     * 滑动灵敏度, 默认为 12
     */
    swipeSpeed: PropTypes.number,
    /**
     * 是否展示面板指示点
     */
    dots: PropTypes.bool,
    /**
     * 面板指示点样式
     */
    dotStyle: PropTypes.object,
    /**
     * 面板指示点激活样式
     */
    dotActiveStyle: PropTypes.object,
    /**
     * 项目之间的间距, 单位为 px
     */
    cellSpacing: PropTypes.number,
    /**
     * 对齐方式
     */
    cellAlign: PropTypes.oneOf(['left', 'center', 'right']),
    /**
     * 为 true 时垂直展示, 为 false 时水平展示
     */
    vertical: PropTypes.bool,
    /**
     * 是否循环播放
     */
    infinite: PropTypes.bool,
    /**
     * 移除所有的控制
     */
    withoutControls: PropTypes.bool,
    /**
     * 切换面板前的回调函数
     */
    beforeChange: PropTypes.func,
    /**
     * 切换面板后的回调函数
     */
    afterChange: PropTypes.func
};
Swipe.defaultProps = {
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    cellAlign: 'center',
    selectedIndex: 0,
    dotStyle: {},
    dotActiveStyle: {}
};

export default Swipe;
