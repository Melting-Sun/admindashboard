import React, { useState, useEffect } from "react";
import './Product.css'
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function UsersList() {
  const [productsData, setProductsData] = useState([]);


  const userDelete = (userId) => {
    fetch(`https://dashborad-1910f-default-rtdb.firebaseio.com/products/${userId}.json`,
      {
        method: 'DELETE',
      }
    ).then((res) => console.log(res))

  }

  useEffect(() => {
    fetch("https://dashborad-1910f-default-rtdb.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setProductsData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [productsData]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: (params) => {
        // console.log(params);
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return(
          <>
            <Link to={`/product/${params.row.id}`} className="link">
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
        rows={productsData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}

export default UsersList;
