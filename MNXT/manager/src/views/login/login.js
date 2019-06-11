import React,{useState,useEffect} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import styles from './login.scss';
function Login(props){
      // 获取login
  let {login,user} = props;
const [state]=useState(user)
console.log(props)
  useEffect(()=>{
    
  }, []);
     // 处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        // 调登录接口
        login({
          user_name: values.username,
          user_pwd: values.password
        })
      }
    });
    if(state.isUser){
        if(state.isUser.code==1){
            
            // props.history.push("/home")
        }
    }
    
  };
    // 表单校验
  const { getFieldDecorator } = props.form;
       return ( <div className={styles.wrap}>
            <div className={styles.fixed}>
                <Form onSubmit={handleSubmit} className={styles.login_form}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ pattern: /^[a-zA-Z\d]+$/, message: '账号输入错误' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '密码输入错误!' }],
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
                      
                        <Button type="primary" htmlType="submit" className={styles.login_form_button}>
                            登录
                       </Button> 
                    </Form.Item>
                </Form>
            </div>
        </div>)
}

const mapStateToProps=state=>{
   
    return state
}
const mapDispatchToProps=dispatch=>{
    return {
        login(payload){
            dispatch({
                type: 'user/login',
                payload
            })
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(Login));