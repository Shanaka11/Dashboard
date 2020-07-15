import React from "react";
import avatar from "../img/profile-boy.png";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1-3">
          <div className="card card-base">
            <div className="card-body">
              <div className="card-header">Shanaka Abeysinghe</div>
              <div className="card-header-desc">Senior Software Engineer</div>
              <div className="card-img-container">
                <img src={avatar} alt="Avatar" className="card-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-base">A</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card card-base">A</div>
        </div>
        <div className="col">
          <div className="card card-base">A</div>
        </div>
        <div className="col">
          <div className="card card-base">A</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
