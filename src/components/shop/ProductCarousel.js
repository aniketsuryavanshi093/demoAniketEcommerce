import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SHOW_PROD } from "../../saga/action.types";

function ProductCarousel() {
  const [latest, setlatest] = useState([]);
  const state = useSelector((state) => state.Product);
  const dispatch = useDispatch();

  useEffect(() => {
    setlatest(state);
    // window.location.hash = "carousel"
  }, [state]);
//   console.log(latest.slice(0,5));
  return (
    <div className="row">
      <div className="product__discount__slider owl-carousel">
      {latest &&
          latest.slice(0 , 5).map((elem) => (
            <div key={elem.id} className="mycolumn col-lg-4">
              <div  className="product__discount__item">
                <div
                  className="product__discount__item__pic"
                  
                >
                  <img src={elem.image} alt={elem.title} srcset="" />
                  <div className="product__discount__percent">-20%</div>
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                    <NavLink
                onClick={() =>
                  dispatch({ type: SHOW_PROD, id: elem.id })
                }
                to={`/productdetail/${elem.id}`}
              >
                 <i className="fa fa-shopping-cart"></i>
              </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="product__discount__item__text">
                  <span>{elem.category}</span>
                  <h5>
              <NavLink
                onClick={() =>
                  dispatch({ type: SHOW_PROD, id: elem.id })
                }
                to={`/productdetail/${elem.id}`}
              >
                {elem.title}
              </NavLink>
            </h5>
                  <div className="product__item__price">
                    ${elem.price} <span>$36.00</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
    </div>
  );
}

export default ProductCarousel;
  