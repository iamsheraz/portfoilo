import React from "react";
import { Dropdown } from "react-bootstrap";

const ResumeDropdown = ({ id = "resume-dropdown" }) => {
    return (
        <Dropdown className="resume-dropdown ms-4">
            <Dropdown.Toggle variant="outline-light" id={id} className="resume-toggle">
                Resume
            </Dropdown.Toggle>

            <Dropdown.Menu className="resume-menu">
                <Dropdown.Item
                    href="/Sheraz-Tariq-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="resume-item"
                >
                    View Resume
                </Dropdown.Item>
                <Dropdown.Item
                    href="/Sheraz-Tariq-Resume.pdf"
                    download="Sheraz-Tariq-Resume.pdf"
                    className="resume-item"
                >
                    Download PDF
                </Dropdown.Item>
                <Dropdown.Item
                    href="https://www.linkedin.com/in/mstariq"
                    target="_blank"
                    rel="noreferrer"
                    className="resume-item"
                >
                    LinkedIn Profile
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ResumeDropdown;
