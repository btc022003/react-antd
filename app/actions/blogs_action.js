import * as types from '../constants/action_types'
import * as apis from '../api/blog_api'
export function on_save(data){
    return{
        type:types.BLOG_SAVE,
        data:data
    }
}
export function load_data(dispatch){
    return ()=>apis.get_blog_data(dispatch)
}
