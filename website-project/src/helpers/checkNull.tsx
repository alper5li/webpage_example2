import data from '../data/blog.json'


export default function checkNull(item:number)
{
let check:boolean = false;

data.forEach(element =>{
    if(parseInt(element.id)==item)
    {
        check= true;
    }
})
    return check;
}