import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Products.css";
import Chart from "../../components/Chart/Chart";
import Button from "@mui/material/Button";
import { productsData } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";

function Products() {
  let params = useParams();
  // console.log(params);
  // console.log(params.productID);

  const [mainProduct, setMainProduct] = useState([]);
  const [newPP, setNewPP] = useState([]);
  const newArray = Object.entries(newPP);
  console.log(newArray);
  const [newP, setNewP] = useState([]);

  useEffect(() => {
    fetch("https://dashborad-1910f-default-rtdb.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => {
        setMainProduct(data);
        const foundProduct = data.find((p) => p.id == params.productID);
        setNewPP(foundProduct);
        // console.log(newPP);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [params.productID, mainProduct]);

  return (
    <>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">
            {
              <>
                {newArray.map(([key, value]) => {
                  if (key === "title") {
                    return <h3 key={key}>{value}</h3>;
                  }
                  return null;
                })}
              </>
            }
          </h1>
          <Link to="/newProduct">
            <Button variant="contained" style={{ backgroundColor: "teal" }}>
              Create
            </Button>
          </Link>
        </div>

        <div className="poductTop">
          <div className="productTopLeft">
            <Chart title="Sale In Month" data={productsData} dataKey="sales" />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <div className="productInfoImg">
                {newArray.map(([key, value]) => {
                  if (key === "avatar") {
                    return (
                      <img
                        src={value}
                        alt="Product Avatar"
                        key={key}
                        className="productInfoImg"
                      />
                    );
                  }
                  return null;
                })}
              </div>
              <span className="productName">
                {
                  <>
                    {newArray.map(([key, value]) => {
                      if (key === "title") {
                        return <h3 key={key}>{value}</h3>;
                      }
                      return null;
                    })}
                  </>
                }
              </span>
            </div>

            <div className="productInfoButtom">
              <div className="productInfoItem">
                <div className="productInfoKey">ID:</div>
                <div className="productInfoValue">
                  {
                    <>
                      {newArray.map(([key, value]) => {
                        if (key === "id") {
                          return <p key={key}>{value}</p>;
                        }
                        return null;
                      })}
                    </>
                  }
                </div>
              </div>
            </div>

            <div className="productInfoButtom">
              <div className="productInfoItem">
                <div className="productInfoKey">Name: </div>
                <div className="productInfoValue">
                  {
                    <>
                      {newArray.map(([key, value]) => {
                        if (key === "title") {
                          return <p key={key}>{value}</p>;
                        }
                        return null;
                      })}
                    </>
                  }
                </div>
              </div>
            </div>

            <div className="productInfoButtom">
              <div className="productInfoItem">
                <div className="productInfoKey">Sales: </div>
                <div className="productInfoValue">
                  {
                    <>
                      {newArray.map(([key, value]) => {
                        if (key === "price") {
                          return <p key={key}>{value}</p>;
                        }
                        return null;
                      })}
                    </>
                  }
                </div>
              </div>
            </div>

            <div className="productInfoButtom">
              <div className="productInfoItem">
                <div className="productInfoKey">Status: </div>
                <div className="productInfoValue">
                  {
                    <>
                      {newArray.map(([key, value]) => {
                        if (key === "status") {
                          return <p key={key}>{value}</p>;
                        }
                        return null;
                      })}
                    </>
                  }
                </div>
              </div>
            </div>

            <div className="productInfoButtom">
              <div className="productInfoItem">
                <div className="productInfoKey">In Stock: </div>
                <div className="productInfoValue">
                  {
                    <>
                      {newArray.map(([key, value]) => {
                        if (key === "instock") {
                          return <p key={key}>{value}</p>;
                        }
                        return null;
                      })}
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="productButtom">
          <form className="productForm" >


            <div className="productFormLeft">
              <label>product name</label>
              <input type="text" placeholder="React"/>

              <label>In Stock</label>
              <select id="inStock">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>

              <label >Active</label>
              <select id="inStock">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>

              
            </div>


            <div className="productFormRight">
              <div className="productUploader">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                 alt="profile photo"
                 className="productUploadImg"
                 />
                 <label >
                  <PublishIcon/>
                 </label>
                 <input type="file" style={{display: 'none'}}/>
              </div>

              <button className="productButton">Upload (Edit)</button>


            </div>


          </form>
        </div>

      </div>
    </>
  );
}

export default Products;
