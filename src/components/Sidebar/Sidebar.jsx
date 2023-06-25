import React from "react";
import "./Sidebar.css";
import LineStyleOutlinedIcon from "@mui/icons-material/LineStyleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyleOutlinedIcon className="sidebarIcon" />
                Home
              </li>
            </Link>

            <Link to="analytics" className="link">
              <li className="sidebarListItem">
                <TimelineOutlinedIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>

            <Link to="sales" className="link">
              <li className="sidebarListItem">
                <TrendingUpOutlinedIcon className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem active">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link to="/newuser" className="link">
              <li className="sidebarListItem">
                <StorefrontOutlinedIcon className="sidebarIcon" />
                New User
              </li>
            </Link>

            <Link to="products" className="link">
              <li className="sidebarListItem">
                <AttachMoneyOutlinedIcon className="sidebarIcon" />
                Products
              </li>
            </Link>

            <Link to="transaction" className="link">
              <li className="sidebarListItem">
                <TrendingUpOutlinedIcon className="sidebarIcon" />
                Transactions
              </li>
            </Link>

            <Link to='reports' className="link">
              <li className="sidebarListItem">
                <AssessmentOutlinedIcon className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MailOutlineOutlinedIcon className="sidebarIcon" />
              Mail
            </li>

            <li className="sidebarListItem">
              <DynamicFeedOutlinedIcon className="sidebarIcon" />
              Feedback
            </li>

            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlinedIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <WorkOutlineOutlinedIcon className="sidebarIcon" />
              Manage
            </li>

            <li className="sidebarListItem">
              <TimelineOutlinedIcon className="sidebarIcon" />
              Anylatics
            </li>

            <li className="sidebarListItem">
              <AssessmentOutlinedIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
