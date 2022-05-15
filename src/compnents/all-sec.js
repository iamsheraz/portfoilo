import React from "react";

import "../Layout/App.css"
import wrapPic from '../assets/imgs/memoji-smiling (1).webp';
import thinkPic from '../assets/imgs/memoji-thinking.webp';
import workPic from '../assets/imgs/memoji-laptop.webp';
import metaPic from '../assets/imgs/meta.webp';
import navImg from "./../assets/imgs/memoji-smiling.webp";
import card2Pic from '../assets/imgs/casecom.png';

const WholeWrapper = (props) => {
    return (
        <section className={props.className}>

            <section className='whole_sec_cont'>
                {/* Who am I --SEC */}
                <section className="who_am_i container-lg">
                    {/* Pic */}
                    <div className=" pic_cont px-5 d-flex align-items-center justify-content-center">
                        <img src={wrapPic} alt="" />
                    </div>
                    {/* Grid 1st Sec */}
                    <div className="row mx-0 main_dets p-5">
                        <div className="col-lg-5 col-md-5 col-sm-5 ps-0 col-md-10 headings_wrap d-flex justify-content-center align-items-center">
                            <div className="inn_wrap_who">
                                <h4 className="heading_title_side">WHO AM I?</h4>
                                <h4 className="heading_title_side">WHO AM I?</h4>
                                <h4 className="heading_title_main">WHO AM I?</h4>
                                <div className="inn_wrap_who">
                                    <h4 className="heading_title_side">WHO AM I?</h4><h4 className="heading_title_side">WHO AM I?</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 pe-0 col-md-10 txt_cont">
                            <div className="main_txt_inner">
                                <h2 className="txt_heading">
                                    A Computer Science and Software Development student <span className="clr-blue"> with a background in Analyst</span>
                                </h2>
                                <p className="point">Currently enrolled at Bellevue University, School of Business with a graduation date of June 2022</p>
                                <p className="point">I started out in  Computer Science Studies before transitioning into my current program - driven by a curiosity of building products as a whole</p>
                                <p className="point">Making things a reality is my passion; whether that’s in videography, software development, or even dreaming up new business ideas</p>
                                <p className="point clr-blue">
                                    That’s why I’m interested in the Front end, a way for me to build things across engineering, business, and design
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Who am I --SEC */}

                {/* Values --SEC */}
                <section className="value-sec container-lg">
                    {/* Pic */}
                    <div className=" pic_cont px-5 d-flex align-items-center justify-content-center">
                        <img src={thinkPic} alt="" />
                    </div>
                    {/* Grid Sec */}
                    <div className="row mx-0 main_dets p-5">
                        <div className="col-lg-5 col-md-5 col-sm-5  ps-0 col-md-10 headings_wrap d-flex justify-content-center align-items-center">
                            <div className="inn_wrap_who">
                                <h4 className="heading_title_side">MY VALUES</h4>
                                <h4 className="heading_title_side">MY VALUES</h4>
                                <h4 className="heading_title_main">MY VALUES</h4>
                                <div className="inn_wrap_who">
                                    <h4 className="heading_title_side">MY VALUES</h4><h4 className="heading_title_side">MY VALUES</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 pe-0 col-md-10 txt_cont">
                            <div className="main_txt_inner">
                                <h2 className="txt_heading">
                                    Curiosity and passion, always trying new things, <span className="clr-blue">and learning through doing</span>
                                </h2>
                                <p className="point">
                                    I believe in experimentation and exploring new things, taking on new challenges while applying creative thinking.
                                </p>
                                <p className="point">
                                    Impact and mentorship are also things that I care about, whether that's learning from others or passing on my experiences - at the end of the day, I want to leave a positive impact in any way I can
                                </p>
                                <p className="point clr-blue">
                                    I'm still very early in my career and have a lot to understand - hence I heavily value personal and professional growth!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Values --SEC */}

                {/* Skills --SEC */}
                <section className="skill-sec container-lg">
                    {/* Pic */}
                    <div className=" pic_cont px-5 d-flex align-items-center justify-content-center">
                        <img src={workPic} alt="" />
                    </div>
                    {/* Grid Sec */}
                    <div className="row mx-0 main_dets p-5">
                        <div className="col-lg-5 col-md-5 col-sm-5  ps-0 col-md-10 headings_wrap d-flex justify-content-center align-items-center">
                            <div className="inn_wrap_who">
                                <h4 className="heading_title_side">MY SKILLS</h4>
                                <h4 className="heading_title_side">MY SKILLS</h4>
                                <h4 className="heading_title_main">MY SKILLS</h4>
                                <div className="inn_wrap_who">
                                    <h4 className="heading_title_side">MY SKILLS</h4>
                                    <h4 className="heading_title_side">MY SKILLS</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 pe-0 col-md-10 txt_cont">
                            <div className="main_txt_inner">
                                <h2 className="txt_heading">
                                    Design driven, customer obsessed,  <span className="clr-blue"> and long-term focused</span>
                                </h2>
                                <p className="point">
                                    <span className="title_tag">
                                        LANGUAGES - THE TECHNICAL KIND
                                    </span>
                                    <br />
                                    Javascript (Typescript), Java, Python, SQL
                                </p>
                                <p className="point">
                                    <span className="title_tag">
                                        PRODUCT
                                    </span>
                                    <br />
                                    User interviews, Product requirement docs, User stories, and Prioritization, Being helpful!
                                </p>
                                <p className="point">
                                    <span className="title_tag">
                                        FRAMEWORKS AND TECHNICAL
                                    </span>
                                    <br />
                                    Node.js, React.js, Next.js
                                </p>
                                <p className="point">
                                    <span className="title_tag">
                                        SOFTWARE TOOLS
                                    </span>
                                    <br />
                                    Tableau (learning), Salesforce, Jira, Adobe CC (Premiere, After Effects, Lightroom), Googling &amp; Stackoverflow
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Skills --SEC */}

                <section className="service_sec my-4">
                    <div className="main_dets">
                        <div className="inn_wrap_who">
                            <div className="head_row_serv">
                                <h4 className="serv_head heading_title_side">WHAT I DO</h4>
                                <h4 className="serv_head heading_title_side">WHAT I DO</h4>
                                <h4 className="serv_head heading_title_side">WHAT I DO</h4>
                                <h4 className="serv_head heading_title_side">WHAT I DO</h4>
                                <h4 className="serv_head heading_title_main">WHAT I DO</h4>
                                <h4 className="serv_head heading_title_side">WHAT I DO</h4>
                                <h4 className="serv_head heading_title_side">WHAT I DO</h4>
                                <h4 className="serv_head heading_title_side">WHAT I DO</h4>
                                <h4 className="serv_head heading_title_side">WHAT I DO</h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Tabs */}
                    <div className="tab_cont container-lg">
                        <div className="tab_inner_content px-5 pb-5">
                            <ul className="nav nav-pills mb-4 ms-0" id="pills-tab" role="tablist">
                                <li className="nav-item tabhome" role="presentation">
                                    <button className="nav-link maintab_home active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Current <span className="badge bg-secondary bagespan">1</span></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Work<span className="badge bg-secondary bagespan">2</span></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Projects<span className="badge bg-secondary bagespan">1</span></button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                {/* Tab 1 */}
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    {/* Cards */}
                                    <div className="row mx-0 cardsrow">
                                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 ps-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Sales Support Specialist at CarMax Garland</p>
                                                <p className='mt-3'>Greet prospective clients and analyze their purchase needs by actively listening and making suggestions based on their automobile needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab 2 */}
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row mx-0 cardsrow">
                                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4 ps-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Technical Support at Fry's Electronics - Plano,</p>
                                                <p className='tab_home_seco'>TX 2015 to 2019:</p>
                                                <p className='mt-4'>Worked and managed tech team to help clients debug their hardware and software issues.</p>
                                                <p className="mt-1">Building new custom machines for businesses based on client needs.</p>
                                            </div>
                                        </div>
                                        <div className="cardscol col-lg-6 col-md-6 col-sm-12 mt-4 pe-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Claims Analyst at State Farm Insurance Richardson,</p>
                                                <p className='tab_home_seco'>TX 2019 to 2021:</p>
                                                <p className='mt-3'>
                                                    Determined the liability for the various stakeholders involved in accidents.
                                                </p>
                                                <p className="mt-1">
                                                    Investigate, analyze, and resolve claims involving complex issues, including but not limited to coverage questions. This required to be knowledgeable and informed on current automobile insurance regulations and laws.
                                                </p>
                                                <p className="mt-1">
                                                    Conduct in-depth interviews of stakeholders involved in the accident to determine the liability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab 3 */}
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <div className="row mx-0 cardsrow">
                                        <div className="cardscol col-lg-6 col-md-6 col-sm-12 mt-4 pe-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Youtune - A SoundCloud Site</p>
                                                <p className='tab_home_seco'>August 2021 - November 2021</p>
                                                <p className='mt-3'>
                                                    This project was a collaboration of the Bellevue University, Youtune is, a project for a songs system using JAVA Server. to YouTunes as a platform for releasing their newest material with a complete artist-owned purchasing model. Users see YouTunes as the first stop to find out announcements, sampler tracks, and build-your-own music bundles for their favorite artists that they can easily take with them on the go by storing those bundles in the cloud or have them downloaded to their favorite device. Used JSP, GitHub and Java, and SQL.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className='about_conatiner pb-5'>
                    <div className="container-lg px-5 pb-3">
                        <div className="row mx-0">
                            <div className=" col-lg-6 col-md-6 col-sm-12">
                                <div className='about_inner'>
                                    <h2>
                                        In conclusion,
                                        <span className='blue_para'> I'm here to learn
                                        </span>
                                    </h2>
                                    <p>
                                        My number 1 passion is making things - hence Development and being a product-minded Software Engineer are ways for me to build across engineering, design, and business.
                                    </p>
                                    <p>
                                        I've got a lot more to share and would love to chat about potential internship opportunities; even if they don't exist yet - let's get the conversation started!
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
                            <div className="funfacts col-lg-6 col-md-6 col-sm-12">
                                <div className='second_col d-flex justify-content-center '>
                                    <div className='second_inner'>
                                        <h5>FUN FACTS</h5>
                                        <p>Favorite Tv series is <span id="durisn_span">Loki</span> </p>
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
            </section>

        </section>
    )
};
export default WholeWrapper;
