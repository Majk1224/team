import React, { Component } from 'react'
import style from './leftList.css';
import { Menu, Icon, Button } from 'antd';
const { SubMenu }  = Menu;
export default class LeftList extends Component {
    constructor(){
        super()
        this.state={
            collapsed: false,
        }
    }
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <div className={style.leftList}>
                <div style={{ width:" 100%",height:"100%" }}>
      
                    <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                    >
                    
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                            </span>
                            }
                        >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
