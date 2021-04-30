import React from 'react'

function HeaderSearch() {
    return (
        <div>
                <section class="hero">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all" class="dropdown dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <div  class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <ul class="dropdown-item">
                            <li class="dropdown-item">Vegetables</li>
                            <li class="dropdown-item">Fresh Meat</li>
                            <li class="dropdown-item">Fruit & Nut Gifts</li>
                            <li class="dropdown-item">Fresh Berries</li>
                            <li class="dropdown-item">Ocean Foods</li>
                            <li class="dropdown-item">Butter & Eggs</li>
                            <li class="dropdown-item">Fastfood</li>
                            <li class="dropdown-item">Fresh Onion</li>
                            <li class="dropdown-item">Papayaya & Crisps</li>
                            <li class="dropdown-item">Oatmeal</li>
                            <li class="dropdown-item">Fresh Bananas</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="#">
                                <div class="hero__search__categories">
                                    All Categories
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" class="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default HeaderSearch
