import "./AboutUs.css";

import { Layout } from "../../components";
import { Link } from 'react-router-dom'

const AboutUs = (props) => {
  return (
    <Layout user={props.user}>
      <div className = "about-page">
        <div className="about">
          <h2>ABOUT US</h2>
          <p>Hi there! <br /><br /> We’re a rag-tag group of outdoor people that love to get outside, get unplugged, and enjoy the outdoors without emails, phone calls, texts, tik toks, or whatever else the youths are doing these days. We’ve been called quite a few names in our day, but you can call us Team Daale (pronounced: dāāl). <br /><br /> Our mission and purpose is to get YOU outside (and help you find the products that make it fun, and maybe even a little easier too). Why spend another day or another weekend indoors, connected to your phone when you can get outside instead? We believe that freetime outside frees the mind and the soul, so join our fun posse and get free in the outdoors with us! <br /><br /> Wish you could join in on the fun? You can! Everyone is welcome in this community, and we hope you’ll meet us in the EverFree Outdoors soon.</p>
          <Link className="join-button" to="/sign-up">
            let's be friends
          </Link>
        </div>
        <div className="meet" id="meet-the-team">

          <div className="meet-title">
            <h2>MEET THE TEAM</h2>
          </div>

          <div className="orange-bar"></div>

          <div className="profiles">

            <div className="david">
              <div className="letter-image-block">
                <h1>D</h1>
                <img src="https://i.imgur.com/Ed5OXRj.jpg" alt="david headshot"></img>
              </div>
              <div className="profile-text">
                <h4>David Gurule</h4>
                <p>Dave received his software engineering training through G.A. and holds a Masters Degree from CSU.  His passion is people, innovation, technology and how they support each other.  Dave loves space/aviation tech, mountain biking, skiing, and just about everything related to the outdoors.</p>
                <div className="daale-links">
                  <a href="https://www.linkedin.com/in/david-gurule-865624212/" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/GLGB8SJ.png" alt="linkedin icon"></img></a>
                  <a href="https://github.com/darclay" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/zljymLZ.png" alt="github icon"></img></a>
                </div>
              </div>  
            </div>

            <div className="anelise">
              <div className="letter-image-block">
                <h1>A</h1>
                <img src="https://i.imgur.com/9GjfRkU.jpg" alt ="anelise headshot"></img>
              </div>
              <div className="profile-text">
                <h4>Anelise Bergin</h4>
                <p>Anelise comes from a ten year background of marketing, brand experience, and creative design. With a fresh skillset in full stack web development, she likes to consider herself the all-in-one creative solution in all things web design.</p>
                <div className="daale-links">
                  <a href="https://www.linkedin.com/in/anelisebergin/" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/GLGB8SJ.png" alt="linkedin icon"></img></a>
                  <a href="https://github.com/anelisekathryn" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/zljymLZ.png" alt="github icon"></img></a>
              </div>
              </div>
            </div>

            <div className="andrew">
              <div className="letter-image-block">
                <h1>A</h1>
                <img src="https://i.imgur.com/l0yG7WO.jpg" alt ="andrew headshot"></img>
              </div>
              <div className="profile-text">
                <h4>Andrew Freedman</h4>
                <p>Drew began his professional career as a full stack web developer and brings over 10 years of experience in technology. Drew has built custom solutions for numerous financial services firms, with a focus on critical risk and reporting applications.</p>
                <div className="daale-links">
                  <a href="https://www.linkedin.com/in/andrewfreedman3/" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/GLGB8SJ.png" alt="linkedin icon"></img></a>
                  <a href="https://github.com/ajfreedm" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/zljymLZ.png" alt="github icon"></img></a>
              </div>
              </div>
            </div>

            <div className="lance">
              <div className="letter-image-block">
                <h1>L</h1>
                <img src="https://i.imgur.com/yuBmpdC.jpg" alt ="lance headshot"></img>
              </div>
              <div className="profile-text">
                <h4>Lance Simmons</h4>
                <p>As a Software Engineer with a background in a diverse art practice and technical support I seek to bring my passion for sharing in creativity. As a meticulous free-thinker, his penchant for finding inspiring new solutions has motivated him to achieve positive change for himself and his community.</p>
                <div className="daale-links">
                  <a href="https://www.linkedin.com/in/lance-simmons/" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/GLGB8SJ.png" alt="linkedin icon"></img></a>
                  <a href="https://github.com/lancehsimmons" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/zljymLZ.png" alt="github icon"></img></a>
              </div>
              </div>
            </div>

            <div className="ej">
              <div className="letter-image-block">
                <h1>E</h1>
                <img src="https://i.imgur.com/hoPFt6I.jpg" alt ="ej headshot"></img>
              </div>
              <div className="profile-text">
                <h4>EJ Souhmahoro</h4>
                <p>A born and raised New Yorker with passion for problem solving. EJ translates his strong values in dedication, adaptability and resilience to his software engineer/developer role, making him uniquely stand out from other developers.</p>
                <div className="daale-links">
                  <a href="https://www.linkedin.com/in/elhadj-soumahoro-0b1aa3198/" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/GLGB8SJ.png" alt="linkedin icon"></img></a>
                  <a href="https://github.com/soumor801" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/zljymLZ.png" alt="github icon"></img></a>
              </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </Layout>    
  )
}

export default AboutUs;