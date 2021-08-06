import React from 'react';
import Footer from '../../partials/Footer';
import Layout from '../../partials/Layout';
import Navbar from '../../partials/Navbar';


export default function ServiceDetails() {
    return (
        <Layout>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center py-4">Service Details Page</h2>
                        <div className="banner">
                            <img src="/assets/banner.jpg" alt="banner" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque tenetur quae inventore consequuntur iste fugit dicta, nostrum sunt consequatur ad architecto fuga quasi totam quas dolorum enim, illo neque.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Layout>
    )
}
