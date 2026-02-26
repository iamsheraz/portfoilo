import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router";
import Footer from "../compnents/Footer";
import Home from "../pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import navImg from "./../assets/imgs/memoji-smiling.webp";

const Chat = lazy(() => import("../pages/Chat"));

const App = () => {
  const [isMode, setMode] = useState("false");
  const Mode = () => {
    setMode(!isMode);
  };

  return (
    <BrowserRouter>
      <div className={isMode ? "all_wrapper_pro" : "all_wrapper_pro text_dark"}>
        {/* Navbar */}
        <section className="Navbar">
            <div className="navbar_container">
              <div className="container-lg px-5 py-2">
                <div className="Navbar d-flex align-items-center justify-content-between mx-auto pe-3">
                  <Link to="/" className="navbar-brand text-light">
                    <img className="brand-enj" src={navImg} alt="" />
                    <span className="brand_txt">hiresheraz.com</span>
                  </Link>
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
        {/* Navbar */}

        {/* Routes */}
        <Suspense fallback={<div className="container-lg p-5 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
