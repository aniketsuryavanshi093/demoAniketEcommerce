import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SHOW_PROD } from "../../action.types";

function Products({elem}) {
  const dispatch = useDispatch();

    return (
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
    )
}

export default Products
