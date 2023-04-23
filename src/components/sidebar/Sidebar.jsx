import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const handleLogout = () => {
    console.log(currentUser);
    localStorage.removeItem("user", JSON.stringify(currentUser));
  }

  return (
    <div className="sidebar">
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <div className="top">
          <span className="logo">Admin Panel</span>
        </div>
      </Link>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={"/home"} className="link">
            <li class="icon">
              <DashboardOutlinedIcon />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">USERS</p>
          <Link to={"/users"} className="link">
            <li class="icon">
              <PermIdentityIcon />
              <span>Users</span>
            </li>
          </Link>
          <Link to={"/products"} className="link">
            <li class="icon">
              <CategoryOutlinedIcon />
              <span>Products</span>
            </li>
          </Link>
          <li class="icon">
            <Inventory2OutlinedIcon />
            <span>Orders</span>
          </li>
          <li class="icon">
            <LocalShippingOutlinedIcon />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li class="icon">
            <AssessmentOutlinedIcon />
            <span>Stats</span>
          </li>
          <li class="icon">
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li class="icon">
            <SettingsSystemDaydreamOutlinedIcon />
            <span>System Health</span>
          </li>
          <li class="icon">
            <PsychologyOutlinedIcon />
            <span>Logs</span>
          </li>
          <li class="icon">
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li class="icon">
            <AccountBoxOutlinedIcon />
            <span>Profile</span>
          </li>
          <Link to={"/"} className="link">
            <li class="icon" onClick={handleLogout}>
              <ExitToAppIcon />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="color-options"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="color-options"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
