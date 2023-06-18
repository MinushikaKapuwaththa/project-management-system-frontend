import React from "react";
import SyncLoader from 'react-spinners/SyncLoader'
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader-wrapper is-active">
      <SyncLoader color={"rgb(5, 33, 75)"} />
    </div>
  );
};

export default Loading;