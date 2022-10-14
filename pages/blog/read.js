import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Read() {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs').then((data)=>{
      return data.json()})
        .then((parsedData)=>{
          console.log(parsedData);
          setBlogs(parsedData);
        })
  },[])
    return (
      <>
      <style jsx>
        {`
          .blogsOuter{
            display:flex;
            justify-content:center;
            background:#fff;
          }
          .blogsInner{
            display:flex;
            flex-direction:column;
            padding:0
          }
          .blogsInner li{
            cursor: pointer;
          }
          .blog{
            display: inline-block;
            margin: 16px 0 8px 0;
          }
          .goBackBtn{
            display:block;
            text-align:center;
            padding: 16px 0;
            margin: 0;
          }
          h2,h4{
            margin:0;
            color:#000;
          }
        `}
      </style>
        <h1 className='goBackBtn'>Read</h1>
        <main>
          <div className="blogsOuter">
            <ul className='blogsInner'>
              {blogs.map((blogItem)=>{
                return(
                  <Link key={blogItem.title} href={"/blogpost/"+blogItem.slug}>
                    <li className="blog">
                      <h2 className="blogTitle">{blogItem.title}</h2>
                      <h4 className="blogAuthor">{blogItem.author}</h4>
                    </li>
                  </Link>
                );
              })}
              {/* <div className="blog">
                <h2 className="blogTitle">JS</h2>
                <h4 className="blogAuthor">Hope</h4>
              </div>   */}
            </ul>
          </div>
          <Link href="/"><a className='goBackBtn'>Go back &rarr;</a></Link>
        </main>
      </>
    );
  }
  