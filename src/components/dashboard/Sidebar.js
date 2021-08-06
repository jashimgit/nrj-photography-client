import React from 'react';
import { Link } from 'react-router-dom';

const sidebarStyle = {
    background: "rgb(239 228 235)",
    height: "100vh"
};

export default function Sidebar() {
    return (
        <nav style={sidebarStyle}>
            <div className="text-center text-primary py-2">DashBoard</div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link
                        to="/dashboard"
                        className="nav-link menuLink active"
                        aria-current="page"
                    >
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/dashboard/order-list"
                        className="nav-link menuLink"
                        aria-current="page"
                    >
                        Order List
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/dashboard/add-service"
                        className="nav-link menuLink"
                        aria-current="page"
                    >
                        Add Service
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/dashboard/add-admin"
                        className="nav-link menuLink"
                        aria-current="page"
                    >
                        Make Admin
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        to="/dashboard/service"
                        className="nav-link menuLink"
                        aria-current="page"
                    >
                        Manage Service
                    </Link>
                </li>
               
            </ul>
        </nav>
    )
}
