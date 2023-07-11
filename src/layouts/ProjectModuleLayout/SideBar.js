import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideBar.css";
import { useEffect, useState } from "react";

export default function SideBar() {
  const getHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  };
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    setHeight(getHeight());
  }, [document.body, document.documentElement]);

  return (
    <div>
      <div
        className="d-flex flex-column align-items-start flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "max-content", height: `${height}px` }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="/projects-home"
              className="nav-link text-white sidebar-items"
              aria-current="page"
            >
              <i className="fa fa-home" aria-hidden="true"></i>
              <p>Home</p>
            </a>
          </li>
          <li>
            <a
              href="/project-requirement"
              className="nav-link text-white sidebar-items"
            >
              <i className="fa fa-list" aria-hidden="true"></i>
              <p>Requirement</p>
            </a>
          </li>
          <li>
            <a
              href="/project-task"
              className="nav-link text-white sidebar-items"
            >
              <i className="fa fa-tasks" aria-hidden="true"></i>
              <p>Task</p>
            </a>
          </li>
          <li>
            <a href="/project-module" className="nav-link text-white">
              <i className="fa fa-th" aria-hidden="true"></i>
              <p>Module</p>
            </a>
          </li>
          <li>
            <a href="/budget" className="nav-link text-white active">
              <i className="fa fa-money" aria-hidden="true"></i>
              <p>Budget</p>
            </a>
          </li>
          <li>
            <a href="/document" className="nav-link text-white">
              <i className="fa fa-file-text" aria-hidden="true"></i>
              <p>Documents</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
