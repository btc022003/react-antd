const initialState = {
    title:'这是一个标题',
    list:[]
}
export default function blogs(state = initialState,action=""){
    switch(action.type){
        case 'BLOG_SAVE':
            state.title = action.data
            return Object.assign({},state)
            break
        case 'LOAD_BLOG_DATA':
            state.list = action.data.data
            return Object.assign({},state)
            break
        default:
            return state
    }
}
