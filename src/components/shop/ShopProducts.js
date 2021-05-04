import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SHOW_PROD } from "../../saga/action.types";
import ProductCarousel from "./ProductCarousel";
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
      <div id="filter__item" className="filter__item">
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
                <Products elem = {elem}></Products>
              ))}
          </div>
        </div>
      <div className="product__discount">
        <div>
        <div class="section-title product__discount__title">
                            <h2>Sale Off</h2>
                        </div>
          <ProductCarousel/>
          <div className="row">
            {
             
            
            price!=null ?  price.length>0 ?  price.map((elem) => (
                <Products elem={elem}></Products>
              )) : (<h5>no products found for the price range</h5>)  : <h5>search for price range</h5>}
          </div>
        </div>

        
      </div>
      <h3 className="text-center mb-6">Showing all produts </h3>
      <div>
        <div className="row">
          {prod &&
            prod.map((elem) => (
              <Products elem = {elem}></Products>
              
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
