//valid slug: http://localhost:3000/api/blog?slug=javascript
import fs from 'fs'
export default function Blog(req,res){
    fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
        try {
            // console.log(data);
            res.status(200).json(JSON.parse(data));
        } 
        catch (error) {
            res.status(500).json({error: "No such blog found"})
        }
    })
}