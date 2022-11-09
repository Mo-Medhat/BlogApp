import React from 'react'
import aboutCover from '../assets/about.jpg'

function About() {
  return <>
    <section>
      <div className="row gx-0 aboutBg">
        <div className="col-12 col-sm-8">
          <div className="coverPage">
          <div className="img"><img src={aboutCover} className="w-100" alt="" /></div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="hint mt-2 mt-md-5 ">
            <h2 className='mb-1 h1 fw-bold'>Hello,</h2>
            <h5>My name is Mohamed Medhat</h5>
            <h5>I am Egyptian.</h5>
            <h5>I am 23 years old.</h5>
          </div>
        </div>
      </div>
      <div className="container-fluid container-lg py-5">
        <div className="headTitle">
          <h1 className='text-center text-uppercase'>Story</h1>
          <div className="aboutDesc w-75 mx-auto">
          <p>After graduation, I decided to search for the thing that I love and find my passion in it, which is programming. Also, From my point of view, I believe that the world will change to digital more widely in the near future.</p>
          <p>I was able to learn front-end development. but Actually, I faced a little trouble at the beginning because of the huge number of sources, but I learned some basics through some of them on websites.</p>
          <p>However, I decided to make the best of myself so I improved my skills whether technically or socially. Firstly, on the technical side, I joined Route Academy, which helped me to understand the skills and use them. Secondly, on the social side by making friends in this field, Consequently, I have less than one year of experience in JavaScript and React. Moreover, I am familiar with Jest for testing.</p>
          <p>And here I am, I would like to have an opportunity through you to continue my own journey.</p>
          </div>
          <div className="links text-center mt-4">
            <a className='fa-xl mx-1 p-2' href="https://github.com/Mo-Medhat"><i className="fab fa-github"></i></a>
            <a className='fa-xl mx-1 p-2' href="https://www.linkedin.com/in/mo-medhat/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default About