import data from '../data/blog.json'
import checkNull
 from './checkNull';
import postJSX from '../components/singlePostDetails';

function post(index:any){

    let jsx;
    let id = index;
    
    if(checkNull(id))
        jsx = postJSX(data,id)

    else
        jsx = <div>ID : {data[id].id.toString()} Not Found.</div>
        
    return jsx;
}



export default post;