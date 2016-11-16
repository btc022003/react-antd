import * as types from '../constants/action_types'
export function get_blog_data(dispatch,page){
    $.getJSON(`http://lixuanqi.com/api/v1/articles/get_articles_by_page.json?page=${page}`)
        .then((res)=>{
            dispatch({
                type:types.LOAD_BLOG_DATA,
                data:res
            })
        })
}
