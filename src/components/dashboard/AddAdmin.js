import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AddAdmin() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const userInfo = {
            username: data.username,
            email: data.email,
            password: data.password,
            status: 'admin'
        };
        // console.log(userInfo);
        const url = `http://localhost:5000/add-admin`;
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInfo)
        }).then((res) => console.log('checkout error', res));
    }
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
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-group">
                                                    <label>User Name</label>
                                                    <input type="text" className="form-control" {...register('username')} />
                                                </div>
                                                <div className="form-group">
                                                    <label>User Email</label>
                                                    <input type="text" className="form-control" {...register('email')} />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
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
