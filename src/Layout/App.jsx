import React, { useState } from "react";
import About from "../compnents/about";
import WholeWrapper from "../compnents/all-sec";
import Footer from "../compnents/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResumeDropdown from "../compnents/ResumeDropdown";
import navImg from "./../assets/imgs/memoji-smiling.webp";
import heroImg from './../assets/imgs/hero.jpeg'

const App = () => {

  const [isSwitch, setSwitch] = useState("false");
  const Change = () => {
    setSwitch(!isSwitch);
  };


  const [isMode, setMode] = useState("false");
  const Mode = () => {
    setMode(!isMode);
  };

  return (
    <div className={isMode ? "all_wrapper_pro" : "all_wrapper_pro text_dark"}>
      {/* Header Sec */}
      <section className="header_sec">
        {/* Navbar Comp */}
        <section className="Navbar">
          <div className="navbar_container">
            <div className="container-lg px-5 py-2">
              <div className="Navbar d-flex align-items-center justify-content-between mx-auto pe-3">
                <a href="/" className="navbar-brand text-light">
                  <img className="brand-enj" src={navImg} alt="" />
                  <span className="brand_txt">hiresheraz.com</span>
                </a>
                <button className={isMode ? "btn-mode m-0 border-0" : "bg-light btn-mode m-0 border-0"} onClick={Mode}>
                  <svg
                    className={isMode ? "d-block" : "d-none"}
                    color="#fff"
                    stroke="#fff"
                    fill="#fff"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fillRule="nonzero"
                        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                      ></path>
                    </g>
                  </svg>
                  <svg className={isMode ? "d-none" : "d-block"}
                    color="#000" stroke="#000" fill="#000" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Navbar Comp */}
        {/* Hero Sec */}
        <div className="hero_main container-lg p-5 pb-0">
          <div className=" row mx-0 d-flex align-items-center py-5">
            <div className="txt col-lg-7 col-md-6 col-sm-7 col-sm-12">
              <h1 className="hero_txt">
                Hey! My name is Sheraz Tariq and I'm seeking full time roles in
                <span className="clr-blue"> Software Development and AI</span>
              </h1>
              <p className="sub_txt my-4">
                Also passionate about Machine Learning roles (AI/ML Engineer, Data Scientist)!
              </p>
              <div className="hero_btns pt-2 mt-4 d-flex align-items-center">
                <a href="mailto:sherazztariq@gmail.com" className="chat">
                  Let's Chat!
                </a>

                <ResumeDropdown id="resume-dropdown-hero" />
              </div>
            </div>
            <div className="video_hero col-lg-5 col-md-6 col-sm-5 col-sm-12 py-5">
              <div className="video_wrap d-flex justify-content-center align-items-center">
                <img src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Hero Sec */}
      </section>
      {/* Header Sec */}

      <section className="main_body_content_wrap">
        {/* Switch Panel */}
        <div className="switch_wrap_cont container-lg p-5">
          <div className={isSwitch ? "switch_panel mt-4 row mx-0 switch_panel flex-wrap" : "panel_alter_bg mt-4 row mx-0 flex-wrap"}>
            {/* Switch */}
            <div className="switch_wrap col-lg-6 col-md-6 col-sm-10">
              <div className="switch">
                <label>
                  <input type="checkbox" unchecked />
                  <span className="slider round" onClick={Change}></span>
                </label>
              </div>
              <h3 className="mode_name pt-4">TLDR Mode</h3>
              <p className="switch-txt w-75">
                Skip the fluff and condense the whole site into a skimmable section
              </p>
            </div>
            {/* Transform Txt */}
            <div className="textWrap_transf text_trans col-lg-6 col-md-6 col-sm-10 text-center ps-5 d-flex justify-content-center align-items-center position-relative">
              <div className="buttons mb-4 pb-2">
                <h5 className={isSwitch ? "trans-heading text-center trans-heading-1" : "trans-heading text-center trans-heading-2"}>TLDR: OFF</h5>
                <h5 className={isSwitch ? "trans-heading text-center trans-heading-4" : " trans-heading text-center trans-heading-3"}>TLDR: ON</h5>
              </div>
            </div>

          </div>
        </div>
        {/* Switch Panel */}

        <WholeWrapper className={isSwitch ? "d-block" : "d-none"} />
        <About className={isSwitch ? "d-none" : "d-block"} />
        <Footer />
      </section>
    </div>
  );
};

export default App;
