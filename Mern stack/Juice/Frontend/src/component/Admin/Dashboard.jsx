import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./Dashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [revenuedetail, setrevenuedetail] = useState(0);

  const [orderdetail, setorderdetail] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Logged out successfully");
    navigate("/login");
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(
          "https://projects-1-7puw.onrender.com/api/orders"
        );

        if (!res.ok) throw new Error("Failed to fetch orders");

        const data = await res.json();
        // Calculate total revenue
        const totalRevenue = data.reduce((sum, order) => {
          return order.status.toLowerCase() === "paid"
            ? sum + Number(order.amount)
            : sum;
        }, 0);

        setrevenuedetail(totalRevenue);

        setrevenuedetail(totalRevenue / 100); // Convert to rupees
        console.log("Fetched orders:", data);
        setorderdetail(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />

      <div className="px-0 container-fluid">
        <div className="row g-0">
          {/* Sidebar */}
          <div className="p-3 col-12 col-md-3 col-lg-2 bg-warning min-vh-100">
            <h4 className="mb-4 text-center text-white">🍹 Juice Admin</h4>

            <ul className="nav flex-column">
              <li className="mb-2 nav-item">
                <Link className="nav-link text-dark fw-bold" to="#">
                  Dashboard
                </Link>
              </li>

              <li className="mb-2 nav-item">
                <Link className="nav-link text-dark" to="#">
                  Orders
                  <span className="badge bg-danger ms-2">
                    {orderdetail.length}
                  </span>
                </Link>
              </li>

              <li className="mb-2 nav-item">
                <Link className="nav-link text-dark" to="/menu">
                  Products
                </Link>
              </li>

              <li className="mb-2 nav-item">
                <Link className="nav-link text-dark" to="/add-product">
                  Add Product
                </Link>
              </li>

              <li className="mb-2 nav-item">
                <Link className="nav-link text-dark" to="#">
                  Customers
                </Link>
              </li>

              <li className="mt-4 nav-item">
                <button
                  className="btn btn-danger w-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="p-4 col-12 col-md-9 col-lg-10">
            {/* Dashboard Cards */}
            <div className="mb-4 row g-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="text-white shadow card bg-warning h-100">
                  <div className="text-center card-body">
                    <h6>Total Orders</h6>
                    <h2>{orderdetail.length}</h2>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="text-white shadow card bg-success h-100">
                  <div className="text-center card-body">
                    <h6>Total Revenue</h6>
                    <h2>₹{revenuedetail}</h2>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="text-white shadow card bg-primary h-100">
                  <div className="text-center card-body">
                    <h6>Total Products</h6>
                    <h2>34</h2>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="text-white shadow card bg-danger h-100">
                  <div className="text-center card-body">
                    <h6>Total Customers</h6>
                    <h2>1020</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders Table */}
            <div className="shadow card">
              <div className="card-header fw-bold">
                Recent Orders
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table align-middle table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orderdetail.length > 0 ? (
                        orderdetail.map((order) => (
                          <tr key={order.orderId}>
                            <td>{order.orderId}</td>

                            <td>{order.user?.name || "N/A"}</td>

                            <td>₹{order.amount / 100}</td>

                            <td>
                              <span
                                className={`badge ${order.status === "Delivered"
                                  ? "bg-success"
                                  : order.status === "Pending"
                                    ? "bg-warning text-dark"
                                    : order.status === "Cancelled"
                                      ? "bg-danger"
                                      : "bg-primary"
                                  }`}
                              >
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="4"
                            className="py-4 text-center text-muted"
                          >
                            No orders found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* End Main Content */}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;