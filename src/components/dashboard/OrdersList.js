/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function OrdersList() {
    const [orderList, setOrderList] = useState([]);
    const {register} = useForm();
    
    const handleChange = (_id) => {
        console.log(_id);
        const status = event.target.value;
        const id = _id;
        fetch('http://localhost:5000/change-status', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                status: status, 
                _id: id
            })
        })
    }
    
    // fetch data from server
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [])

    // table data 
    const orderRow = orderList.map((order) => {
        const { _id, serviceName, price, status, email } = order;
        return (
            <tr>
                <td>{serviceName}</td>
                <td>{email}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td>
                    <form onChange={() => handleChange(_id)}>
                        <select className="form-control form-control-sm" value={status} {...register('status')}>
                            <option value="pending">pending</option>
                            <option value="on going">On Going</option>
                            <option value="complete">Complete</option>
                        </select>
                    </form>
                </td>
            </tr>
        );
    })
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
                    </div>
                    <div className="col-md-12">
                        <h3>Orders</h3>
                        <div className="card shadow">
                            <div className="card-body">
                                <table className="table table-borderless">
                                    <thead className="text-success text-uppercase">
                                        <tr>
                                            <th>Service name</th>
                                            <th>email</th>
                                            <th>price</th>

                                            {/* <th>order time</th> */}
                                            <th>status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody> {orderRow} </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
