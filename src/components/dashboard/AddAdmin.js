import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AddAdmin() {
    const { register } = useForm();
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
                                    <h4>Create Admin page </h4>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <form>
                                                <div className="form-group">
                                                    <label>User Name</label>
                                                    <input type="text" className="form-control" {...register('username')} />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
