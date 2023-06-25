import React, { useState, useEffect } from "react";
import "./UsersList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function UsersList() {
  const [userDatas, setUserDatas] = useState([]);


  const userDelete = (userId) => {
    fetch(`https://dashborad-1910f-default-rtdb.firebaseio.com/userRows/${userId}.json`,
      {
        method: 'DELETE',
      }
    ).then((res) => console.log(res))

  }

  useEffect(() => {
    fetch("https://dashborad-1910f-default-rtdb.firebaseio.com/userRows.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setUserDatas(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userDatas]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src="avatar.jpg" className="userListImg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return(
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        )
      }
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        disableSelectionOnClick
      />
    </div>
  );
}

export default UsersList;
