import React from 'react'

export default function Photos() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="display-4 text-center pb-4">Our Works</h4>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="/assets/demo.jpg" className="card-img-top" alt="title" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <div className="d-flex justify-content-between">
                                        <a href="/" className="btn btn-primary">Order</a>
                                        <a href="/" className="btn btn-primary">View details</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="/assets/demo.jpg" className="card-img-top" alt="title" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <div className="d-flex justify-content-between">
                                        <a href="/" className="btn btn-primary">Order</a>
                                        <a href="/" className="btn btn-primary">View details</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="/assets/demo.jpg" className="card-img-top" alt="title" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <div className="d-flex justify-content-between">
                                        <a href="/" className="btn btn-primary">Order</a>
                                        <a href="/" className="btn btn-primary">View details</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
