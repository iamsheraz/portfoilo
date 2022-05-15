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
                                I'm a Computer Science student
                                <span className='blue_para' >  with a background in Analyst
                                </span>
                            </h2>
                            <p>
                                My number 1 passion is making things - hence Software Development and being a product-minded Software Engineer are ways for me to build across engineering, design, and business
                            </p>
                            <p>
                                Beyond the resume, I'm someone who looks on the positive side of things, is always up for a challenge, sweats the details, and values personal growth above all else
                            </p>
                            <p>
                                I've got a lot more to share, and would love to chat about potential internship opportunities; even if they don't exist yet - let's get the conversation started!
                            </p>
                            <div className="hero_btns pt-2 mt-4 d-flex align-items-center">
                                <a href="mailto:sherazztariq@gmail.com" className="chat">
                                    Let's get in touch!
                                </a>
                                <a href="https://drive.google.com/file/d/1-LlMMYnRQXv8O37aj-HnJ9FXQJOwfztM/view?usp=sharing" target="_blank" className="resume">
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
