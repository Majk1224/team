import React from 'react';
import { connect } from 'dva';
import styles from './login.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
     btnFn(){

     }
  

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.wrap}>
                <div className={styles.fixed}>
                    <Form onSubmit={this.handleSubmit} className={styles.login_form}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '账号输入错误' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '密码输入错误!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className={styles.login_form_forgot} href="">
                                忘记密码
                            </a>
                          
                            <Button onClick={this.btnFn.bind(this)} type="primary" htmlType="submit" className={styles.login_form_button}>
                                登录
                           </Button> 
                        </Form.Item>
                    </Form>
                </div>
            </div>

        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);



export default connect()(WrappedNormalLoginForm);
