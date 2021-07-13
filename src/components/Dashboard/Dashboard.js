import React from "react";
import GroupBoard from "../GroupBoard/GroupBoard";
import { useGetData } from "../hooks/useGetData";
import Preloader from "../Preloader/Preloader";
import "./styles.scss";

const Dashboard = () => {
  const data = useGetData();

  return (
    <div className="dashboard">
      <div className="container">
        <h1 className="title">All Indeces</h1>
        <div className="dashboard-content">
          {data.length === 0 ? (
            <Preloader />
          ) : (
            data.map((groupInfo, idx) => {
              return <GroupBoard groupInfo={groupInfo} key={idx} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
