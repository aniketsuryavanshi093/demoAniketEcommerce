import React from 'react'
import BreadCrumb from '../common components/BreadCrumb'
import AllCartItems from './AllCartItems'

function Cart() {
    let quantity = 0;
    let total = 0;
      const proddata  = JSON.parse(localStorage.getItem("product"))
      proddata.map((elem)=>{
          quantity = elem.quantity  
          total = total + quantity * elem.price
      })
    return (
        <div>
      <BreadCrumb title="Shopping Cart"></BreadCrumb>
      <section class="shoping-cart spad">
        <div class="container">
            <div class="row">
                <AllCartItems></AllCartItems>
                
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__btns">
                        <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                        <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Subtotal <span>$454.98</span></li>
                            <li>Total {total>0 ? <span>$ {total}</span> : <span>cart is empty </span>} </li>
                        </ul>
                        <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
</div> </section>       </div>
    )
}

export default Cart
