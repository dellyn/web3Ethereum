import React from "react";
import GroupBoardItem from "../GroupBoardItem/GroupBoardItem";
import "./styles.scss";

const GroupBoard = ({ groupInfo }) => {
  return (
    <div className="dashboard-block">
      <div className="dashboard-block_name">{groupInfo.name}</div>
      <div className="dashboard-block_content">
        {groupInfo.data.map((item, idx) => {
          return <GroupBoardItem data={item} key={idx} />;
        })}
      </div>
    </div>
  );
};
export default GroupBoard;
