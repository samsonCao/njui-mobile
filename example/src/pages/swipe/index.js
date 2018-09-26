import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { NavBar, Swipe } from 'njui-mobile';

class SwipePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 1
        };
    }

    render() {
        return (
            <div className='page'>
                <NavBar left-text='返回' title='Swipe' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>带间距</div>
                    <div className='demo-block__row'>
                        <Swipe>
                            <div style={{ height: '200px', background: 'green' }} />
                            <div style={{ height: '200px', background: '#39CCCC' }} />
                            <div style={{ height: '200px', background: '#0074D9' }} />
                        </Swipe>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>循环滚动</div>
                    <div className='demo-block__row'>
                        <Swipe infinite>
                            <div style={{ height: '200px', background: 'green' }} />
                            <div style={{ height: '200px', background: '#39CCCC' }} />
                            <div style={{ height: '200px', background: '#0074D9' }} />
                        </Swipe>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>自动滚动</div>
                    <div className='demo-block__row'>
                        <Swipe
                            selectedIndex={this.state.selectedIndex}
                            infinite
                            autoplay
                            dots
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={selectedIndex => this.setState({ selectedIndex })}
                        >
                            <div style={{ height: '200px', background: 'green' }} />
                            <div style={{ height: '200px', background: '#39CCCC' }} />
                            <div style={{ height: '200px', background: '#0074D9' }} />
                        </Swipe>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>自定义面板指示点</div>
                    <div className='demo-block__row'>
                        <Swipe
                            dotStyle={{ background: 'red', width: '30px', height: '10px', borderRadius: '5px' }}
                            dotActiveStyle={{ background: 'orange', width: '30px', height: '10px', borderRadius: '5px' }}
                        >
                            <div style={{ height: '200px', background: 'green' }} />
                            <div style={{ height: '200px', background: '#39CCCC' }} />
                            <div style={{ height: '200px', background: '#0074D9' }} />
                        </Swipe>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>垂直方向</div>
                    <div className='demo-block__row'>
                        <Swipe
                            infinite
                            vertical
                            withoutControls
                        >
                            <div style={{ height: '200px', background: 'green' }} />
                            <div style={{ height: '200px', background: '#39CCCC' }} />
                            <div style={{ height: '200px', background: '#0074D9' }} />
                        </Swipe>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>带间距</div>
                    <div className='demo-block__row'>
                        <Swipe
                            infinite
                            cellSpacing={10}
                            slideWidth={0.8}
                            cellAlign='left'
                        >
                            <div style={{ height: '200px', background: 'green' }} />
                            <div style={{ height: '200px', background: '#39CCCC' }} />
                            <div style={{ height: '200px', background: '#0074D9' }} />
                        </Swipe>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>类似淘宝头条效果</div>
                    <div className='demo-block__row'>
                        <Swipe
                            infinite
                            autoplayInterval={1000}
                            vertical
                            autoplay
                            withoutControls
                        >
                            <div className='nj-ellipsis'>南极电商向龙巧国际有限公司收购 Classic Teddy 商标的公告</div>
                            <div className='nj-ellipsis'>第五届董事会第二十一次会议决议公告</div>
                            <div className='nj-ellipsis'>南极电商股份有限公司召开 2017 年第二次临时股东大会提示性公告</div>
                        </Swipe>
                    </div>
                </div>
            </div>
        );
    }
}

SwipePage.propTypes = {};
SwipePage.defaultProps = {};

export default SwipePage;
