import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
function SideBar() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [latest, setlatest] = useState([]) 
    console.log(state.Product)
    useEffect(()=>{
      if(state.Product){
        setlatest(state.Product.slice(0,3))

      }
    },[])
    console.log(latest);
    const [min, setmin] = useState(0)
    const [max, setmax] = useState(0)
    console.log(min , max);
    return (
       
            <div className="col-lg-3 col-md-5">
                    <div className="sidebar">
                        <div className="sidebar__item">
                            <h4>Department</h4>
                            <ul>
                                <li><NavLink   className="department" onClick = {()=>dispatch({type: "GET_BY_PRODUCT_CAT" , category:`men's clothing`})} to="#"><a href="#filter__item">Mens Clothing</a></NavLink></li>
                                <li><NavLink className="department" onClick = {()=>dispatch({type: "GET_BY_PRODUCT_CAT" , category:`jewelery`})} to="#"><a href="#filter__item">Jwellery</a></NavLink></li>
                                <li><NavLink className="department" onClick = {()=>dispatch({type: "GET_BY_PRODUCT_CAT" , category:`electronics`})} to="#"><a href="#filter__item">Electronics</a></NavLink></li>
                                <li><NavLink className="department" onClick = {()=>dispatch({type: "GET_BY_PRODUCT_CAT" , category:`women's clothing`})} to="#"><a href="#filter__item">Women's Clothing</a></NavLink></li>
                               
                            </ul>
                        </div>
                        <div className="sidebar__item">
                            <h4>Price</h4>
                            <div className="price-range-wrap">
                                {/* <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                    data-min="10" data-max="540">
                                    <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                    <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                    <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                </div> */}
                                <div className="range-slider">
                                    <div className="">
                                        <input type="number" value = {min} placeholder="min" onChange={(e)=>setmin(e.target.value)}/>
                                        <input type="number" value = {max} placeholder="max" onChange={(e)=>setmax(e.target.value)} />
                                    </div>
                                </div>
                                <Button variant="outlined" onClick={()=>dispatch({type:"SET_PRICE" , payload:{max:max, min:min}})} p="3">Search</Button>
                                
                            </div>
                        </div>
                       
                        <div class="sidebar__item">
                            <div class="latest-product__text">
                                <h4>Latest Products</h4>
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carouselimg carousel-item active">
      <img  src={latest && latest[0]?.image} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="price">{latest && latest[0]?.price}</h5>
        <p className = "para">{latest && latest[0]?.title}</p>
      </div>
    </div>
    <div class=" carouselimg carousel-item">
      <img src={latest && latest[1]?.image} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="price">${latest && latest[1]?.price}</h5>
        <p className = "para">{latest && latest[1]?.title}</p>
      </div>
    </div>
    
    <div class=" carouselimg carousel-item">
      <img src={latest && latest[2]?.image} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="price">{latest && latest[2]?.price}</h5>
        <p className = "para">{latest && latest[2]?.title}</p>
      </div>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
      
    )
}

export default SideBar

                    