import React, { useState, useEffect } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./WidgetSm.css";

function WidgetSm() {
  const [newMember, setNewMember] = useState([]);

  useEffect(() => {
    fetch("https://hello-37c13-default-rtdb.firebaseio.com/.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(JSON.stringify(data));

        // console.log(data);

        setNewMember(data);

        // console.log(newMember);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [newMember]);

  useEffect(() => {
    // console.log(newMember);
  }, [newMember]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joind Members</span>

      <ul className="widgetSmList">
        {newMember.map((member) => (
          <li className="widgetSmListItem" key={member.id}>
            <img src="avatar.jpg" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{member.username}</span>
              <sapn className="widgetSmUserTitle">{member.title}</sapn>
            </div>

            <button className="widgetSmButton">
              <VisibilityOutlinedIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
