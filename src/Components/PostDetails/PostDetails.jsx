import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

function PostDetails() {

  const [allPosts, setAllPosts] = useState(null)
  let {id} = useParams();

  async function getPosts() {
      let {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos/`);
      setAllPosts(data);
    };

  useEffect(() => {
      getPosts()
  }, [])



  return <>
    <section>
      <div className="container-fluid container-lg py-5">
          <div className="row gy-3">
            {allPosts?.map( (post)=> <>
              {post.id == id? <>
            <div key={post.id} className="col-12 col-md-6">
            <div className="postImg mb-2"><img src={post?.url} className='w-100' alt="img" /></div>   
            </div>
            <div className="col-12 col-md-6">
              <div className="postTitle mb-2"><h3>{post?.title}</h3></div>
              <div className="postDesc"><p className='text-muted fs-5 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident sunt architecto facilis dolor, ullam vero unde cupiditate dolorem aspernatur repudiandae labore vel veniam odit nihil repellat corporis temporibus deserunt.</p></div>
              <div className="postDesc"><p className='text-muted fs-5 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident sunt architecto facilis dolor, ullam vero unde cupiditate dolorem aspernatur repudiandae labore vel veniam odit nihil repellat corporis temporibus deserunt.</p></div>
            </div>
              </>: ""}
            </>)}
          </div>
        </div>
    </section>

    <section className='bgDiff'>
    <div className="container-fluid container-lg py-5">
      <div className="row gy-4">
      <div className="headTitle d-flex justify-content-between align-items-center">
        <h4 className='mb-0'><i className="far fa-newspaper fa-fw"></i> Latest News</h4>
            <Link to="/" className='btn-style'>See More</Link>
          </div>
            {allPosts?.map( (post)=><>
                    {post.id != id && post.id <= 5? <><div key={post.id} className="col-12 col-sm-6 col-md-3 ">
                    <Link to={`/PostDetails/${post.id}`} className="d-flex align-items-center text-decoration-none">
                    <div className="items">
                        <div className="postImg mb-2"><img src={post.url} className='w-100' alt="img" /></div>
                        <div className="itemDesc">
                        <div className="postTitle"><h5>{post.title && post.title.length > 20? <>{post.title.slice(0,19)}...</>: post.title}</h5></div>
                        <div className="postDesc"><p className='text-muted mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. minus delectus?</p></div>
                        <p className='mb-0 text-decoration-underline'> Keep Reading <i className="fas fa-long-arrow-alt-right ms-1"></i></p>
                        </div>
                      </div></Link>
                    </div></> : ""}
                  </>)}
      </div>
    </div>
  </section>

  </>
}

export default PostDetails