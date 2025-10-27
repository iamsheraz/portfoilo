import React from 'react'
import "../Layout/App.css"
import navImg from "./../assets/imgs/memoji-smiling.webp";
const About = (props) => {
    return (
        <section className={props.className}>
            <div className="about_conatiner container-lg px-5 pb-5">
                <div className="row mx-0 pb-3">
                    <div className=" col-lg-6 col-md-6 col-sm-6 ps-0 left">
                        <div className='about_inner'>
                            <h2>
                                As a computer science graduate
                                <span className='blue_para' >  with extensive experience in full-stack development
                                </span>
                            </h2>
                            <p>
                                My primary passion is creating and building. I view software development not just as a job, but as a means to combine engineering, design, and business to create robust and impactful solutions.
                            </p>
                            <p>
                                In addition to my professional skills, I'm an individual who thrives on positivity and embraces challenges. I pay keen attention to detail and hold personal growth in the highest regard. My past roles, as reflected in my resume, have taught me the importance of these traits in the tech industry.
                            </p>
                            <p>
                                There is much more to my journey and experiences that I would love to share. I'm excited about discussing potential internship opportunities that could benefit from my skills and passion. Even if a formal opportunity doesn't exist, I am eager to explore possibilities. Let's start the conversation!
                            </p>
                            <div className="hero_btns pt-2 mt-4 d-flex align-items-center">
                                <a href="mailto:sherazztariq@gmail.com" className="chat">
                                    Let's get in touch!
                                </a>
                                <a href="https://drive.google.com/file/d/1GqfKCnMoaAs29iQtw-e4tJAu-XTdpCaB/view?usp=sharing" target="_blank" rel="noreferrer" className="resume">
                                    PDF Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="funfacts col-lg-6 col-md-6 col-sm-6 right light_card">
                        <div className='second_col d-flex justify-content-center '>
                            <div className='second_inner'>
                                <h5>FUN FACTS</h5>
                                <p>Favorite Tv series is<span id='durisn_span'> Loki</span></p>
                                <p>Tech and gadget enthusiast</p>
                                <p>Love videography and photography</p>
                                <p>Pineapple on pizza is not bad ¯\_(ツ)_/¯</p>
                                <p>Not all crypto is bad investment</p>
                            </div>
                            <div className='img_div'>
                                <img className="" src={navImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;
