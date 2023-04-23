import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progressbar.css";

const Progressbar = () => {
  return (
    <div className="progressbar">
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={80} text={"80%"} strokeWidth={4} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">
          <CurrencyRupeeOutlinedIcon style={{ fontSize: "28px" }} />
          20000
        </p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">
                <CurrencyRupeeOutlinedIcon style={{ fontSize: "14px" }} />
                12.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">
                <CurrencyRupeeOutlinedIcon style={{ fontSize: "14px" }} />
                12.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">
                <CurrencyRupeeOutlinedIcon style={{ fontSize: "14px" }} />
                12.4k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
