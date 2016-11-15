import React,{Component} from 'react'
import {DatePicker,Button} from 'antd'
import {Link,Menu,SubMenu} from 'react-router'
export default class MainPage extends Component{
    render(){
        return(
            <div>
                <h1>第一个页面ant.design</h1>
                <hr/>
                <DatePicker/>
                <Button>按钮</Button>
                <Link to="/">Home</Link>
                <Link to="list">List</Link>
                <Link to="about">About</Link>
                {this.props.children}
            </div>
            <Menu
                mode="inline"
                style={{width:240}}
            >
                <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                    <Menu.Item key="1"></Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}
