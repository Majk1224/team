import React, { Component } from 'react'
import style from './Header.css'
import { Menu, Dropdown,Avatar } from 'antd';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
class Header extends Component {
    
    render () {
        return (
            <div className={style.header}>
                <div className={style.header_img}>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
                </div>
                <div className={style.header_user}>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="">
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={style.Avatar}/>
                            <span className={style.user_name}>kkkkk</span>
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default Header