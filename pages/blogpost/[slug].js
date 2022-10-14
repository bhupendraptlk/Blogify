import {useRouter} from 'next/router'
import React, { useEffect, useState } from 'react'

const Slug = () => {
    const router=useRouter();
    const {slug}= router.query;
    const [blog,setBlog] = useState([]);
    useEffect(()=>{
    fetch(`http://localhost:3000/api/blog?slug=${slug}`).then((data)=>{
        return data.json();})
            .then((parsed)=>{
                setBlog(parsed);
            })
    },[])
    return (
        <div>
            <main>
                <h1>{blog.slug}</h1>
                <hr />
                <p>{blog.content}</p>
                <br /><br />
                <hr/>
                <h4>Author : {blog.author}</h4>
            </main>
        </div>
    );
}

export default Slug;