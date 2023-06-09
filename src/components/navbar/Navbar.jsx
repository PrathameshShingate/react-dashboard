import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon />
          </div>
          <div className="item">
            <img
              src="data:image/jpeg;base64,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"
              className="avatar"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
