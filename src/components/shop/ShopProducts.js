import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SHOW_PROD } from "../../action.types";
import Products from "./Products";

function ShopProducts() {
  //   const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  const [prod, setprod] = useState([]);
  const [category, setcategory] = useState([]);
  const [price, setprice] = useState([]);
  const state = useSelector((state) => state);
  console.log(state);
  console.log(state.ProductCat);

  useEffect(() => {
    setprod(state.Product);
    setprice(state.setPrice)
    setcategory(state.ProductCat);
  }, [state]);
  //   console.log(prod);
  // console.log(state.ProductCat);

  return (
    <div className="col-lg-9 col-md-7">
      <div className="product__discount">
        <div>
          <h1></h1>
          <div className="row">
            {
            price &&
              price.map((elem) => (
                <Products elem={elem}></Products>
              ))}
          </div>
        </div>

        <div className="filter__item">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="filter__sort">
                <span>Sort By</span>
                <select>
                  <option value="0">Default</option>
                  <option value="0">Default</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="filter__found">
                <h6>
                  <span> {category && category.length}</span> Products found
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="filter__option">
                <span className="icon_grid-2x2"></span>
                <span className="icon_ul"></span>
              </div>
            </div>
          </div>

          <div className="row">
            {state.ProductCat &&
              state.ProductCat.map((elem) => (
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg">
                      <img src={elem.image} alt="" srcset="" />
                      <ul className="product__item__pic__hover">
                        <li>
                          <NavLink to={`/productdetail/${elem.id}`}>
                            <i className="fa fa-shopping-cart"></i>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <NavLink
                          onClick={() =>
                            dispatch({ type: SHOW_PROD, id: elem.id })
                          }
                          to={`/productdetail/${elem.id}`}
                        >
                          {elem.title}
                        </NavLink>
                      </h6>
                      <h5>${elem.price}</h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <h3 className="text-center mb-6">Showing all produts </h3>
      <div>
        <div className="row">
          {prod &&
            prod.map((elem) => (
              <div key={elem.id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg">
                    <img src={elem.image} alt="" srcset="" />
                    <ul className="product__item__pic__hover">
                      <li>
                        <NavLink to={`/productdetail/${elem.id}`}>
                          <i className="fa fa-shopping-cart"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <NavLink
                        onClick={() =>
                          dispatch({ type: SHOW_PROD, id: elem.id })
                        }
                        to={`/productdetail/${elem.id}`}
                      >
                        {elem.title}
                      </NavLink>
                    </h6>
                    <h5>${elem.price}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="product__pagination">
          <NavLink to="#">2</NavLink>
          <NavLink to="#">3</NavLink>
          <NavLink to="#">
            <i className="fa fa-long-arrow-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ShopProducts;
