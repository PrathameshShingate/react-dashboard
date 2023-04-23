import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ListTable from "../../components/table/Table";
import Chart from "../../components/chart/Chart";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./single.css";
import { useParams } from "react-router-dom";

const Single = ({collectionName}) => {
  // fetch single document from different collections using props
  const [fetchedDocument, setfetchedDocument] = useState("");

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchDoc = async () => {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setfetchedDocument(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchDoc();
  }, []);

  return (
    <div className="singleUser">
      <Sidebar />
      <div className="singleUserContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={fetchedDocument.img} alt="avatar" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{fetchedDocument.displayName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{fetchedDocument.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{fetchedDocument.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{fetchedDocument.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart chartTitle="Last six months (balance)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <ListTable type="secondList" />
        </div>
      </div>
    </div>
  );
};

export default Single;
