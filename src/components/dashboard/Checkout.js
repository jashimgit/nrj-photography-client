/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../auth/Auth';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Checkout() {
    // const [orderReview, setOrderReview ] = useState({})
    const auth = useAuth();
    const { register, handleSubmit } = useForm();

    // get logged in user details from context
    const { name, email } = auth.formatUser;

    const onSubmit = (data) => {
        // console.log(data);
        const bookingInfo = {
            customerName: name,
            email: email,
            address: data.address,
            phone: data.phone,
            serviceName: data.serviceName,
            price: data.price,
            status: 'pending'

        }
        console.log(bookingInfo);
        const url = `http://localhost:5000/add-order`;
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingInfo)
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
                            <h2 className="text-primary text-center py-4 mb-2">Checkout</h2>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Fill the information below: </h4>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <label>Service Name</label>
                                            <input type="text" className="form-control" {...register('serviceName')} />
                                        </div>
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="text" className="form-control" {...register('price')} />
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea className="form-control" {...register('address')} rows="3"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Customer Phone Number</label>
                                            <input type="text" className="form-control" {...register('phone')} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>

                                </div>
                                <div className="col-md-6">
                                    product details
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



