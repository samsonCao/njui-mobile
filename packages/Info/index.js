import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Info extends Component {
    render() {
        const { children, ...others } = this.props;
        return (
            <div className='nj-info'>{children}</div>
        );
    }
}

Info.propTypes = {
    children: PropTypes.node
};
Info.defaultProps = {};

export default Info;
