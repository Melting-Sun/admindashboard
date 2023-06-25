import React from 'react'
import './Topbar.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    Dashboard 💙
                </span>
            </div>

            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneOutlinedIcon/>
                    <sapn className="topIconBadge">2</sapn>
                </div>

                <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <sapn className="topIconBadge">2</sapn>
                </div>

                <div className="topbarIconContainer">
                    <SettingsIcon/>
                </div>

                <img src="avatar.jpg" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}

export default Topbar