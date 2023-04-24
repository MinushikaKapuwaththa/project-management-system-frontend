import React from "react";
import "./Home.css";
import AlertDismissible from "./Alert";
import HomeTable from "./HomeTable";

export default function Home() {
  return (
    <div className="Home">
      <div className="Homeglass">
        <div className="conHom">
          <br />
          <h5>Assigned Task</h5>
          <br />
          <HomeTable />
        </div>
        <div className="alert">
          <AlertDismissible />
        </div>
      </div>
    </div>
  );
}
