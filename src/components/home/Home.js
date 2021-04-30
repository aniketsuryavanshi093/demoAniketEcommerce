import React from 'react'
import PostComponent from '../common components/PostComponent'
import Banner from './Banner'
import FearturesRelatedProducts from './FearturesRelatedProducts'
import Homecarousel from './Homecarousel'
import HomeCategory from './HomeCategory'

function Home() {
    return (
        <div>

            <Homecarousel></Homecarousel>
            <HomeCategory></HomeCategory>
            <FearturesRelatedProducts></FearturesRelatedProducts>
            <Banner></Banner>
            <PostComponent title = "From the Blog"></PostComponent>
        </div>
    )
}

export default Home
