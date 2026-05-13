import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";





function AdminDashboard() {
    const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Logged out successfully");
    Navigate("/login");
  };
  const [orderdetail, setorderdetail] = useState([]);
   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://projects-1-7puw.onrender.com/api/orders");
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        console.log("Fetched orders:", data); // debug
        setorderdetail(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div className="p-3 col-md-2 bg-warning min-vh-100">
          <h4 className="mb-4 text-white">🍹 Juice Admin</h4>

          <ul className="nav flex-column">
            <li className="mb-2 nav-item">
              <a className="nav-link text-dark fw-bold" href="#">Dashboard</a>
            </li>

            <li className="mb-2 nav-item">
              <a className="nav-link text-dark" href="#">Orders {orderdetail}</a>
            </li>

            <li className="mb-2 nav-item">
              <a className="nav-link text-dark" href="#">Products</a>
            </li>

            <li className="mb-2 nav-item">
              <a className="nav-link text-dark" href="#">Add Product</a>
            </li>

            <li className="mb-2 nav-item">
              <a className="nav-link text-dark" href="#">Customers</a>
            </li>

            <li className="mt-4 nav-item" onClick={handleLogout}>
              <a className="cursor-pointer nav-link text-danger" >Logout</a>
            </li>
          </ul>
        </div>


        {/* Main Content */}
        <div className="p-4 col-md-10">

          {/* Top Cards */}
          <div className="mb-4 row">

            <div className="col-md-3">
              <div className="text-white card bg-warning">
                <div className="card-body">
                  <h6>Total Orders</h6>
                  <h3>{orderdetail.length}</h3>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-white card bg-success">
                <div className="card-body">
                  <h6>Total Revenue</h6>
                  <h3>₹56,300</h3>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-white card bg-primary">
                <div className="card-body">
                  <h6>Total Products</h6>
                  <h3>34</h3>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-white card bg-danger">
                <div className="card-body">
                  <h6>Total Customers</h6>
                  <h3>1020</h3>
                </div>
              </div>
            </div>

          </div>


          {/* Recent Orders */}
          <div className="card">
            <div className="card-header fw-bold">
              Recent Orders
            </div>

            <div className="card-body">

              <table className="table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {orderdetail.map((order) => (
                    <tr>
                      <td>{order.orderId}</td>
                      <td>{order.user.name}</td>
                      <td>₹{order.amount / 100}</td>
                      <td>
                      <span className="badge bg-warning">{order.status}</span>
                    </td>
                  </tr>))
                  }
                
                 

                  {/* <tr>
                    <td>#1024</td>
                    <td>Priya</td>
                    <td>₹950</td>
                    <td>
                      <span className="badge bg-success">Delivered</span>
                    </td>
                  </tr>

                  <tr>
                    <td>#1023</td>
                    <td>Raj</td>
                    <td>₹620</td>
                    <td>
                      <span className="badge bg-primary">Processing</span>
                    </td>
                  </tr> */}

                </tbody>
              </table>

            </div>
          </div>


        </div>
      </div>
    </div>
    </>
  );
  
}

export default AdminDashboard;