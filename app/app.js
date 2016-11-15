import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import React from 'react'

import ReactDOM from 'react-dom'
import {DatePicker,Button} from 'antd'
import 'antd/dist/antd.css'
import {MainPage,HomePage,ListPage,AboutPage} from './views'
//import MainPage from './views/main_page'
import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk' //使用thunk解决异步取数据问题

import {Provider} from 'react-redux'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'

import rootReducer from './reducers'
//ReactDOM.render(<MainPage/>,document.getElementById('root'))
console.dir(rootReducer)
console.log($.fn.jquery)
const reducer = combineReducers({
    rootReducer,
    routing:routerReducer
})
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)
// 不需要使用异步服务器取数据时候的写法
//const store = createStore(
//    reducer,
//    DevTools.instrument()
//)
//
//通过thunk中间件处理异步服务器取数据问题
const store = compose(applyMiddleware(thunk))(createStore)(
    reducer,
    DevTools.instrument()
)
console.dir(store)

console.dir(browserHistory)
console.dir(history)
console.dir(MainPage)
const history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={MainPage}>
                    <IndexRoute  component={HomePage}/>
                    <Route path="list" component={ListPage}/>
                    <Route path="about" component={AboutPage}/>
                </Route>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
)
