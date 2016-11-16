import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Card,Col,Row,Input} from 'antd'
import {bindActionCreators} from 'redux'
import * as BlogActions from '../actions/blogs_action'
//import {}
class Home extends Component{
    constructor(props,context){
        //console.dir(this)
        super(props,context)
        console.dir(this)
        const {blogs,dispatch} = this.props
        this.actions = bindActionCreators(BlogActions,dispatch)
        this.actions.load_data(dispatch,1)
        this.state = {}
     }

    changeTitle(eve){
        console.log(this.state)
        console.log(this.props)
        console.log(this.refs.txtTitle.value)
        this.state.title = this.refs.txtTitle.refs.input.value
        this.actions.on_save(this.state.title)

    }

    render(){
        return(
            <div>
                <Input placeholder="请输入标题" ref="txtTitle"/>
                <a onClick={this.changeTitle.bind(this)}>改变标题</a>
                <h3>这个是首页</h3>
                <h1>{this.props.blogs.title}</h1>
                <div style={{backgroundColor:'#ececec',padding:'20px'}}>
                {this.props.blogs.list.map(function(item){
                    return(<Row key={item.id}>
                        <Col span="24">
                            <Card title={item.title}>{item.target}</Card>
                        </Col>
                    </Row>)
                })}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.dir(state)
    return{
        blogs:state.rootReducer.blogs
    }
}
export default connect(mapStateToProps)(Home)
