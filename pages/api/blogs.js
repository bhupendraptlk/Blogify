import fs from 'fs'

export default async function Blogs(req,res){
    let blogdata=await fs.promises.readdir('blogdata');
    let myFile;
    let item;
    let allBlogs=[];
    for (let index = 0; index < blogdata.length; index++) {
        item=blogdata[index];
        myFile=await fs.promises.readFile(('blogdata/'+item),'utf-8');
        allBlogs.push(JSON.parse(myFile));
    }
    res.status(200).json(allBlogs);
}