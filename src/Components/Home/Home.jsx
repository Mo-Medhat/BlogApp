import axios from 'axios';
import React, { useEffect, useState } from 'react'
import pageCover from '../assets/coverPage.jpg';
import { Link } from 'react-router-dom';

function Home() {
    const [allPosts, setAllPosts] = useState(null)

    async function getPosts() {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setAllPosts(data.slice(0,11));
      };

    useEffect(() => {
        getPosts()
    }, [])


  return <>
  <main>

  <section>
    <div className="coverPage">
      <img src={pageCover} className="w-100" alt="Cover Blog" />
      <span className='pageTitle'><h2 className='mb-0'>To Plant a Garden is to Believe in Tomorrow.</h2></span>
    </div>
    <div className="container-fluid container-lg py-4">
        <div className="row g-2">
          <div className="col-12 col-md-8 col-lg-9">
            <div className="row g-3">
              {allPosts?.map( (post)=><>
                  {post.id <= 2? <><div key={post.id} className="col-12 col-sm-6">
                    <div className="contentItem">
                      <div className="postImg mb-2"><img src={post.url} className='w-100' alt="img" /></div>
                      <div className="postTitle"><h5>{post.title}</h5></div>
                      <div className="postDesc"><p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. minus delectus?</p></div>
                      <Link to={`/PostDetails/${post.id}`} className="d-flex align-items-center">Keep Reading <i className="fas fa-long-arrow-alt-right ms-1"></i></Link>
                    </div>
                  </div></> : ""}
                </>)}
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
          {allPosts?.map( (post)=><>
                  {post.id > 2 && post.id <= 5? <>
                    <aside key={post.id} className="asideContentItem">
                      <div className="postTitle"><h5>{post.title}</h5></div>
                      <div className="postDesc"><p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. minus delectus? <span><Link to={`/PostDetails/${post.id}`} className="d-flex align-items-center">Keep Reading <i className="fas fa-long-arrow-alt-right ms-1"></i></Link></span></p></div>
                    </aside>
                  </> : ""}
                </>)}
            </div>
        </div>
        
    </div>
  </section>

  <section className='bgDiff'>
    <div className="container-fluid container-lg pt-3 pb-5">
      <div className="row gy-3">
      <div className="headTitle d-flex justify-content-between align-items-center">
            <h4 className='mb-0'><i className="far fa-newspaper fa-fw"></i> Latest News</h4>
            <Link to="/" className='btn-style'>See More</Link>
          </div>
            {allPosts?.map( (post)=><>
                    {post.id > 5 && post.id <= 9? <><div key={post.id} className="col-12 col-sm-6 col-md-3 ">
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

  <section>
    <div className="container-fluid container-lg py-5">
      <div className="row gy-4">
          {allPosts?.map( (post)=><>
            {post.id > 9? <>
              <div key={post.id} className="col-12 col-md-6">
                  <div className="moreContent">
                    <div className="postImg"><img src={post.url} className='w-100' alt="img" /></div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                <div className="sideDesc">
                      <div className="mx-4">
                        <div className="postTitle"><h5>{post.title}</h5></div>
                        <div className="postDesc"><p className='text-muted mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident sunt architecto facilis dolor, ullam vero unde cupiditate dolorem aspernatur repudiandae labore vel veniam odit nihil repellat corporis temporibus deserunt.</p></div>
                        <Link to={`/PostDetails/${post.id}`} className="d-flex align-items-center">Keep Reading <i className="fas fa-long-arrow-alt-right ms-1"></i></Link>
                      </div>
                    </div>
                </div>
                </> : ""}
              </> 
            )}
      </div>
    </div>
  </section>

  </main>
  </>

}


export default Home