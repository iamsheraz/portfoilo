import React from "react";

import "../Layout/App.css"
import ResumeDropdown from "./ResumeDropdown";
import wrapPic from '../assets/imgs/memoji-smiling (1).webp';
import thinkPic from '../assets/imgs/memoji-thinking.webp';
import workPic from '../assets/imgs/memoji-laptop.webp';
import navImg from "./../assets/imgs/memoji-smiling.webp";

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
                                    A seasoned Java Full Stack Developer <span className="clr-blue"> Computer science graduate from Bellevue University driven by a passion for building robust software solutions from end to end</span>
                                </h2>
                                <p className="point">My journey in software development started with an intense curiosity about how products are built as a whole. This curiosity evolved into a passion for making things a reality, whether that's in software development, or in conceiving innovative business ideas.</p>
                                <p className="point">Whether it's developing Microservices using Spring Boot</p>
                                <p className="point">Creating responsive UI components, or utilizing AWS services to support web applications</p>
                                <p className="point clr-blue">
                                    I'm always thrilled to take on the challenge. I am eager to leverage my skills and experiences to create software that makes a difference.
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
                                    I embrace experimentation and exploration in my work, taking on new challenges with creative thinking.
                                </p>
                                <p className="point">
                                    I care deeply about making an impact and mentoring others, learning from experiences and sharing my own knowledge - I aim to leave a positive imprint wherever I can.
                                </p>
                                <p className="point clr-blue">
                                    Although I have gained substantial experience and technical skills over the years, I consider myself at an early stage in my career with endless possibilities ahead. This mindset drives my dedication to personal and professional growth, as I continually refine my mastery in Java, J2EE technologies, and various cutting-edge tools and frameworks.
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
                                    Proficient in Java, JavaScript (including TypeScript), and SQL, with a foundational understanding of Python.
                                </p>
                                <p className="point">
                                    <span className="title_tag">
                                        PRODUCT
                                    </span>
                                    <br />
                                    With a rich background in full-stack development, I have participated in user interviews, helped prepare product requirement documents, crafted user stories, and conducted prioritization exercises. I believe in collaboration and constructive teamwork.
                                </p>
                                <p className="point">
                                    <span className="title_tag">
                                        FRAMEWORKS AND TECHNICAL
                                    </span>
                                    <br />
                                    J2EE technologies, Spring MVC, Spring Boot, Angular, IBM MQ, Kafka, and React.js among others.
                                </p>
                                <p className="point">
                                    <span className="title_tag">
                                        SOFTWARE TOOLS
                                    </span>
                                    <br />
                                    I am well-versed in version control tools (GIT, SVN), build tools (Maven, Gradle), and continuous integration tools (Jenkins). Furthermore, I have experience with AWS and other cloud services, Docker, Kubernetes, and tools for managing user accounts and configurations. I regularly leverage resources like Google and Stack Overflow for problem-solving and knowledge expansion.
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
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-certifications-tab" data-bs-toggle="pill" data-bs-target="#pills-certifications" type="button" role="tab" aria-controls="pills-certifications" aria-selected="false">Certifications<span className="badge bg-secondary bagespan">3</span></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false">Education<span className="badge bg-secondary bagespan">3</span></button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                {/* Tab 1 */}
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    {/* Cards */}
                                    <div className="row mx-0 cardsrow">
                                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 ps-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Java Full Stack Developer at NextGear Capital</p>
                                                <p className='mt-3'>As a Java Full Stack Developer at NextGear Capital, I contributed to developing Microservices & APIs using Spring Boot and Apache Kafka, built responsive UI components with React.js and Angular, and utilized AWS for cloud solutions. I was also involved in Agile development, database management, and implemented unit and integration testing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab 2 */}
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row mx-0 cardsrow">
                                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4 ps-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Java Full Stack Developer at FieldRoutes.</p>
                                                <p className='tab_home_seco'>TX 2019 to 2022:</p>
                                                <p className='mt-4'> contributed to software development in an Agile environment, developed user interfaces using Spring MVC and AngularJS, and implemented Spring features such as Dependency Injection and AOP. Additionally, I worked on RESTful services, managed transactions with Hibernate and JPA, and established a CI/CD pipeline using Jenkins.</p>
                                                <p className="mt-1">Moreover, I was actively involved in the development of a Service Oriented Architecture (SOA) application, creating a single-page application using AngularJS. I gained extensive experience with Hibernate Criteria queries and ORM mappings, alongside creating Spring Batch processes and working with message broker services like Rabbit MQ and Active MQ. I also conducted end-to-end testing using the Protractor framework and implemented integration testing with Selenium and Cucumber. The role at CDO Technologies further bolstered my ability to work across various technologies and frameworks in the dynamic field of software development.</p>
                                            </div>
                                        </div>
                                        <div className="cardscol col-lg-6 col-md-6 col-sm-12 mt-4 pe-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Software Developer at Molina health care.</p>
                                                <p className='tab_home_seco'>TX 2018 to 2019:</p>
                                                <p className='mt-3'>
                                                    I was a Java Developer participating in all stages of the software development life cycle using Agile methodologies. I was heavily involved in business process analysis, requirements gathering, and creating user interface components using various technologies such as JSP, Spring, Servlets, and AngularJS. My tasks also included integrating Tiles 3 framework with Spring MVC and utilizing Hibernate and JPA for data access. Moreover, I implemented both RESTful and SOAP-based web services and maintained AWS infrastructure. My work at Molina Health Care gave me the opportunity to utilize my full skill set and deliver comprehensive software solutions.
                                                </p>
                                                <p className="mt-1">
                                                    Research Production issues through knowledge of SQL/Database and provide timely solutions.
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
                                                <p className='tab_home_seco'>August 2018 - November 2018</p>
                                                <p className='mt-3'>
                                                    This project was a collaboration of the Bellevue University, Youtune is, a project for a songs system using JAVA Server. to YouTunes as a platform for releasing their newest material with a complete artist-owned purchasing model. Users see YouTunes as the first stop to find out announcements, sampler tracks, and build-your-own music bundles for their favorite artists that they can easily take with them on the go by storing those bundles in the cloud or have them downloaded to their favorite device. Used JSP, GitHub and Java, and SQL.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Certifications Tab */}
                                <div className="tab-pane fade" id="pills-certifications" role="tabpanel" aria-labelledby="pills-certifications-tab">
                                    <div className="row mx-0 cardsrow">
                                        {/* Microsoft Azure Fundamentals */}
                                        <div className="cardscol col-lg-6 col-md-6 col-sm-12 mt-4 pe-4">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Microsoft Certified: Azure Fundamentals</p>
                                                <p className='tab_home_seco'>October 2023</p>
                                                <p className='mt-3'>
                                                    The AZ-900 certification covers a broad range of topics, including an understanding of cloud concepts, core Azure services, security, privacy, compliance, and trust, as well as Azure pricing and support.
                                                </p>
                                                <p>
                                                    <a href="https://learn.microsoft.com/en-gb/users/muhammadtariq-4270/credentials/bdebba28cf2429af" target="_blank" rel="noopener noreferrer">View my AZ-900 Certification</a>
                                                </p>
                                            </div>
                                        </div>

                                        {/* AWS Certified Cloud Practitioner */}
                                        <div className="cardscol col-lg-6 col-md-6 col-sm-12 mt-4 ps-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>AWS Certified Cloud Practitioner</p>
                                                <p className='tab_home_seco'>2023</p>
                                                <p className='mt-3'>
                                                    The AWS Certified Cloud Practitioner validates foundational knowledge of AWS Cloud architecture, services, security, compliance, and economics. This certification demonstrates an understanding of AWS Cloud concepts, services and terminology.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Microsoft Certified: Azure AI */}
                                        <div className="cardscol col-lg-6 col-md-6 col-sm-12 mt-4 pe-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Microsoft Certified: Azure AI</p>
                                                <p className='tab_home_seco'>2023</p>
                                                <p className='mt-3'>
                                                    This certification validates expertise in using Azure AI services and cognitive solutions. It covers skills in implementing and managing AI workloads, computer vision, natural language processing, and conversational AI solutions on Azure.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Education Tab */}
                                <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                                    <div className="row mx-0 cardsrow">
                                        {/* Master's Degree */}
                                        <div className="cardscol col-lg-6 col-md-6 col-sm-12 mt-4 pe-4">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Master of Science in Artificial Intelligence</p>
                                                <p className='tab_home_seco'>University of Texas at Austin, USA (In Progress)</p>
                                                <p className='mt-3'>
                                                    Currently pursuing advanced studies in artificial intelligence, focusing on machine learning, deep learning, computer vision, and natural language processing technologies.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bachelor's Degree */}
                                        <div className="cardscol col-lg-6 col-md-6 col-sm-12 mt-4 ps-0">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Bachelor of Science in Computer Software</p>
                                                <p className='tab_home_seco'>Bellevue University at Nebraska, USA</p>
                                                <p className='mt-3'>
                                                    Completed a comprehensive program in computer software development, covering programming languages, software engineering principles, database management, and system design.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mx-0 cardsrow">
                                        {/* Associate Degree */}
                                        <div className="cardscol col-lg-6 col-md-6 col-sm-12 mt-4 pe-4">
                                            <div className='tabscard_one'>
                                                <p className='tab_home_p pt-4'>Associate of Science in Computer Science</p>
                                                <p className='tab_home_seco'>Dallas College at Texas, USA</p>
                                                <p className='mt-3'>
                                                    Foundational education in computer science fundamentals, including programming, algorithms, data structures, and computer systems.
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
                                        As a Java Full Stack Developer, my foremost passion lies in creating robust and effective software solutions. This role allows me to construct across the broad spectrum of engineering, design, and business, capitalizing on my skills and interests.
                                    </p>
                                    <p>
                                        With over six years of professional experience, I have a wealth of knowledge to share and am eager to embrace new challenges. I am particularly interested in exploring opportunities where I can apply my technical prowess and product-oriented mindset to foster growth and innovation. Even if a formal opportunity does not currently exist, I am open to discussion and potential collaboration. Schedule a free 30-minute call to discuss your project, or drop me a line anytime.
                                    </p>
                                    <div className="hero_btns pt-2 mt-4 d-flex align-items-center">
                                        <a href="mailto:hiresheraz@gmail.com" className="chat">
                                            Let's get in touch!
                                        </a>
                                        <a href="https://calendly.com/hiresheraz/30min" target="_blank" rel="noopener noreferrer" className="chat calendar_btn ms-3" aria-label="Book a 30-minute call on Calendly (opens in new tab)">
                                            Schedule a 30-Min Call
                                        </a>
                                        <ResumeDropdown id="resume-dropdown-tldr" />
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

        </section >
    )
};
export default WholeWrapper;
