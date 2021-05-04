import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_ITEM } from "../../saga/action.types";
import "./shop.css";
function AllCartItems() {
  const dispatch = useDispatch();
  const [cart, setcart] = useState([]);

    const removeitem = (index)=>{
        console.log('hello');
        const olddata =JSON.parse(localStorage.getItem('product'))
        console.log(olddata);
        console.log(index);
        // olddata.splice(index,1)
        console.log(olddata[index]); 
        const newdata  =  olddata.filter((elem)=> (elem.id != index ))
        localStorage.setItem('product', JSON.stringify(newdata))
         window.location.reload();

    }

  useEffect(() => {
    const data = window.localStorage.getItem("product");
    const cartproducts = JSON.parse(data);
    setcart(cartproducts);
  }, []);
  console.log(cart);

  return (
    <div className="col-lg-12">
      <div className="shoping__cart__table">
        <table>
          <thead>
            <tr>
              <th className="shoping__product">Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((elem, index) => (
                <tr>
                  <td className="shoping__cart__item cartimage">
                    <img src={elem.image} alt="" />
                    <h5>{elem.title}</h5>
                  </td>
                  <td className="shoping__cart__price">$ {elem.price}</td>
                  <td className="shoping__cart__quantity">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" value={elem.quantity} />
                      </div>
                    </div>
                  </td>
                  <td className="shoping__cart__total">
                    $ {elem.price * elem.quantity}
                  </td>
                  <td className="shoping__cart__item__close">
                    <button
                      onClick={()=>removeitem(elem.id)}
                      className="icon_close"
                    ></button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllCartItems;
