import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css"; // File CSS lokal Anda

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const images = require.context("../img", true);

  return (
    <div className={`wrapper ${isExpanded ? "sidebar-expanded" : ""}`}>
      <aside id="sidebar" className={isExpanded ? "expand" : ""}>
        <div className="d-flex align-items-center justify-content-between p-3">
          <div className="user-img">
            <img src={images("./gojo.png")} alt="User" />
          </div>
          <div className="sidebar-logo">
            <a href="#">Satoru Gojo</a>
            <span>@satorugojo</span>
          </div>
          <div className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={images("./sidebarbell.png")} alt="Bell" />
            </a>
          </div>
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <img src={images("./tombolsidebar.png")} alt="Toggle" />
          </button>
        </div>

        <hr className="divider" />

        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={images("./sidebarhome.png")} alt="Home" />
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={images("./sidebarprofil.png")} alt="Profile" />
              <span>Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={images("./sidebarproject.png")} alt="Projects" />
              <span>Projects</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={images("./sidebarchat.png")} alt="Chat" />
              <span>Chat</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={images("./sidebartips.png")} alt="Tips" />
              <span>Tips</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={images("./sidebarsearch.png")} alt="Search" />
              <span>Search</span>
            </a>
          </li>
        </ul>

        <hr className="divider" />

        <div className="sidebar-item">
          <a href="#" className="sidebar-link">
            <img src={images("./sidebarhelp.png")} alt="Help" />
            <span>Help</span>
          </a>
        </div>

        <hr className="divider" />

        <div className="sidebar-footer">
          <a href="#" className="sidebar-link">
            <img src={images("./sidebardiamond.png")} alt="Upgrade" />
            <span>Upgrade your plan</span>
          </a>
        </div>
      </aside>
      <div className="main p-3">
        <div className="atas" style={{ display: "flex", alignItems: "center" }}>
          <div className="text-left">
            <p>What is happening?</p>
            <p className="desk">
              Let's make your day more productive by using <br />
              Producify!
            </p>
          </div>
          <div className="teksproject" style={{ display: "flex", flexDirection: "column", marginLeft: "50px" }}>
            <label
              htmlFor="fileUpload2"
              className="btn btn-primary"
              style={{ borderRadius: "50%", padding: "5px", backgroundColor: "#023C50", width: "90px", height: "90px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img src={images("./addproject.png")} alt="uploadicon" className="button-icon" style={{ padding: "5px" }} />
            </label>
            <p style={{ fontWeight: "600", color: "#023c50", marginTop: "12px" }}>New Project</p>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Sidebar;
