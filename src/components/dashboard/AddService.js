import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AddService() {
    return (
        <div className="container-fluid mx-0 px-0">
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-12">
                        <Topbar />
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Create New Service </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
