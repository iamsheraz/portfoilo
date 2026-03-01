import React, { useState } from "react";
import { Link } from "react-router";
import About from "../compnents/about";
import WholeWrapper from "../compnents/all-sec";
import ResumeDropdown from "../compnents/ResumeDropdown";
import heroImg from '../assets/imgs/hero.jpeg'

const Home = () => {
  const [isSwitch, setSwitch] = useState("false");
  const Change = () => {
    setSwitch(!isSwitch);
  };

  return (
    <>
      <section className="header_sec">
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
              <Link to="/chat" className="chat">
                Let's Chat!
              </Link>
              <a href="https://calendly.com/hiresheraz/30min" target="_blank" rel="noopener noreferrer" className="chat calendar_btn ms-3" aria-label="Book a 30-minute call on Calendly (opens in new tab)">
                Book a Call
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
      </section>
    </>
  );
};

export default Home;
