import React from "react";
import "./list.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/Datatable";

const List = ({ title, columnData, collectionName }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="dataTabaleContainer">
          <DataTable title={title} columnData={columnData} collectionName={collectionName} />
        </div>
      </div>
    </div>
  );
};

export default List;
