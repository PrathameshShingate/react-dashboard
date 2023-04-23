import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { deleteUser } from "firebase/auth";
import { auth, db } from "../../firebase";
import "./datatable.css";

const DataTable = ({ title, columnData, collectionName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //   const fetchData = async () => {
    //     let list = [];
    //     try {
    //       const querySnapshot = await getDocs(collection(db, "users"));
    //       querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         list.push({ id: doc.id, ...doc.data() });
    //       });
    //       setData(list);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   fetchData();
    // }, []);

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, collectionName),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleClick = async (id) => {
    try {
      // delete user from firestore
      await deleteDoc(doc(db, collectionName, id));

      // delete user from ui
      setData(data.filter((item) => item.id !== id));

      // delete user from authentication
      const user = auth.currentUser;
      deleteUser(user)
        .then(() => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
      
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">
              <Link to={`${params.row.id}`} className="link">
                View
              </Link>
            </div>
            <div
              className="deleteButton"
              onClick={() => handleClick(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="title">
        {title}
        <Link to="new" className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columnData.columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
