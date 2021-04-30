import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSearch from "./components/HeaderSearch";
import Home from "./components/home/Home";
import { BrowserRouter , Route , Link , Switch } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";
import Cart from "./components/shop/Cart";
import Shopdetail from "./components/shop/details/Shopdetail";
import axios from "axios";
import { FETCH_ALL_PRODUCTS, FETCH_CART } from "./action.types";
import { useDispatch } from "react-redux";

// import { useDispatch, useSelector } from "react-redux";
// import { API_CALL_REQUEST } from "./actionTypes";
// import './app.css'
function App() {
  const dispatch = useDispatch()
  // const fetchnewdog=()=>{
  //   dispatch({type:API_CALL_REQUEST})
  // }
  // useEffect(()=>{
  //   fetchnewdog()
  // },[])
  // const state = useSelector(state => state)
  // console.log(state)
  const loaddata = async()=>{
    dispatch({type:FETCH_ALL_PRODUCTS})
    // dispatch({type:FETCH_CART})

  }
  useEffect(()=>{
    loaddata()
  },[])
  return (
    <div>
      <Header></Header>
      <HeaderSearch></HeaderSearch>
   
          <Route exact path="/" ><Home></Home></Route>
          <Route exact path="/shop" >
            <Shop></Shop>
          </Route>
          <Route path="/blog"><Blog/></Route>
            <Route path="/contact"><Contact></Contact></Route>
            <Route path = "/productdetail/:id" > <Shopdetail></Shopdetail> </Route>
      
            <Route path = "/cart" > <Cart></Cart> </Route>
      
      {/* <Home></Home> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
