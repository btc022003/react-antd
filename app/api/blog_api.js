import * as types from '../constants/action_types'
export function get_blog_data(dispatch){
    $.getJSON('http://lixuanqi.com/api/v1/articles/get_articles_by_page.json?page=1')
        .then((res)=>{
            dispatch({
                type:types.LOAD_BLOG_DATA,
                data:res
            })
        })
}
