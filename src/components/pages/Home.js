/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../partials/Banner'
import Footer from '../../partials/Footer'
import Layout from '../../partials/Layout'
import Navbar from '../../partials/Navbar'
// import Photos from './Photos'
import Services from './Services'

export default function Home() {
    return (
        <Layout>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <Photos></Photos> */}
            <Services></Services>
            <Footer></Footer>
        </Layout>
    )
}
