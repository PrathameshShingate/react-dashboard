import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Progressbar from "../../components/progressbar/Progressbar";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/Table";
import "./home.css";

const home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="featured">
          <Progressbar />
          <Chart chartTitle="Last six months (Revenue)"/>
        </div>
        <div className="tableContainer">
          <div className="tableTitle">Latest transactions</div>
          <ListTable type="firstList" />
        </div>
      </div>
    </div>
  );
};

export default home;
