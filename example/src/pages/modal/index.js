import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar, Button, Modal } from 'njui-mobile';

class ModalPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alertVisible: false,
            noAlertVisible: false,
            confirmVisible: false
        };
    }

    render() {
        const { alertVisible, noAlertVisible, confirmVisible } = this.state;
        return (
            <div className='page'>
                <NavBar left-icon='left' title='Modal' fixed onLeftClick={() => window.history.go(-1)} />

                <div className='demo-block'>
                    <div className='demo-block__title'>消息提示</div>
                    <div className='demo-block__row'>
                        <Button plain onClick={() => this.setState({ alertVisible: true })}>Alert</Button>
                        <Button plain onClick={() => this.setState({ noAlertVisible: true })}>无标题 Alert</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>消息确认</div>
                    <div className='demo-block__row'>
                        <Button plain onClick={() => this.setState({ confirmVisible: true })}>Confirm</Button>
                    </div>
                </div>

                <div className='demo-block'>
                    <div className='demo-block__title'>高级用法</div>
                    <div className='demo-block__row'>
                        <Button plain>内嵌表单</Button>
                    </div>
                </div>

                <Modal
                    visible={alertVisible}
                    title='标题'
                    okText='确认'
                    onOk={() => this.setState({ alertVisible: false })}
                >
                    内容
                </Modal>

                <Modal
                    visible={noAlertVisible}
                    okText='确认'
                    onOk={() => this.setState({ noAlertVisible: false })}
                >
                    内容
                </Modal>

                <Modal
                    visible={confirmVisible}
                    title='标题'
                    okText='确认'
                    onOk={() => this.setState({ confirmVisible: false })}
                    cancelText='取消'
                    onCancel={() => this.setState({ confirmVisible: false })}
                >
                    内容
                </Modal>
            </div>
        );
    }
}

ModalPage.propTypes = {};
ModalPage.defaultProps = {};

export default ModalPage;
