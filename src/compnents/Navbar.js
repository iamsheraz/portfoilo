import React from "react";
import "./Navbar.css";
import "../Layout/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import navImg from "./../assets/imgs/memoji-smiling.webp";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="container-lg px-5 py-2">
        <div className="Navbar d-flex align-items-center justify-content-between mx-auto ps-1 pe-3">
          <a href="#" className="navbar-brand text-light">
            <img className="brand-enj" src={navImg} alt="" />
            hiresheraz.com
          </a>
          <button className="btn-mode m-0 border-0">
            <svg
              color="#fff"
              stroke="#fff"
              fill="#fff"
              stroke-width="0"
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
                  fill-rule="nonzero"
                  d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
