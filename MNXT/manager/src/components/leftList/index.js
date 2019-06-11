import React, { Component } from 'react'
import style from './leftList.css';
import { Menu, Icon } from 'antd';
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
                <div style={{ width:" 100%",height:"100%",background:"#001529" }}>
      
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
                                <span>试卷管理</span>
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
                                    <span>用户管理</span>
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
                        <SubMenu
                            key="sub3"
                            title={
                            <span>
                                <Icon type="mail" />
                                <span>考试管理</span>
                            </span>
                            }
                        >
                            <Menu.Item key="13">Option 13</Menu.Item>
                            <Menu.Item key="14">Option 14</Menu.Item>
                            <Menu.Item key="15">Option 15</Menu.Item>
                            <Menu.Item key="16">Option 16</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                            <span>
                                <Icon type="mail" />
                                <span>班级管理</span>
                            </span>
                            }
                        >
                            <Menu.Item key="17">Option 17</Menu.Item>
                            <Menu.Item key="18">Option 18</Menu.Item>
                            <Menu.Item key="19">Option 19</Menu.Item>
                            <Menu.Item key="20">Option 20</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                            <span>
                                <Icon type="mail" />
                                <span>阅卷管理</span>
                            </span>
                            }
                        >
                            <Menu.Item key="21">Option 21</Menu.Item>
                            <Menu.Item key="22">Option 22</Menu.Item>
                            <Menu.Item key="23">Option 23</Menu.Item>
                            <Menu.Item key="24">Option 24</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
