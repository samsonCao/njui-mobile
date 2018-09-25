import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Progress extends Component {
    render() {
        const { percent = 0, color = '#1B9DFF' } = this.props;
        const pivotText = this.props['pivot-text'];
        const pivotColor = this.props['pivot-color'] || '#fff';

        let privotEl = <span style={{ color: pivotColor, background: color }} className='nj-progress__pivot'>{percent}%</span>;
        if (pivotText) {
            privotEl = <span style={{ color: pivotColor, background: color }} className='nj-progress__pivot'>{pivotText}</span>;
        }
        return (
            <div className='nj-progress'>
                <span style={{ background: color, width: percent + '%' }} className='nj-progress__portion nj-progress__portion--with-pivot'>
                    {privotEl}
                </span>
            </div>
        );
    }
}

Progress.propTypes = {
    /**
     * 当前百分比, 默认为 0
     */
    percent: PropTypes.number,
    /**
     * 进度条上的文字
     */
    'pivot-text': PropTypes.string,
    /**
     * 进度条上的文字背景色
     */
    'pivot-color': PropTypes.string,
    /**
     * 进度条颜色
     */
    color: PropTypes.string
};
Progress.defaultProps = {
    percent: 0
};

export default Progress;
