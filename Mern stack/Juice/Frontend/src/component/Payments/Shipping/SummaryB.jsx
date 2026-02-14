import React, { useContext, } from 'react';
//import mosambi from '../../../assets/MOsambi.png';
import { CartContext } from '../../context/CartContext';

const SummaryB = () => {
  const { cart, cartTotal } = useContext(CartContext)
  //const [shipping, setShipping] = useState(50);
  const shipping = 50;
  console.log("Cart in SummaryB:", cart);
const carttotal = cart.reduce(
  (total, item) => total + item.productId.price * item.quantity,
  0
);

  const finalAmount = carttotal + shipping;
  //const [finalamount, setfinalamount] = useState(carttotal)
  // useEffect(()=>{
  //   setfinalamount(carttotal.reduce((total,item)=> total+(item),50))
  // },[carttotal])
  return (
    <>



      <div className="container py-3 bg-light">

        {/* ITEM  */}
        {cart.map((item) => {
          const product = item.productId;

          return (
            <div
              className="mb-4 d-flex align-items-start"
              key={item._id}
            >
              <img
                src={product?.image}
                alt={product?.name}
                className="rounded"
                style={{
                  width: "65px",
                  height: "65px",
                  objectFit: "cover",
                }}
              />

              <div className="ms-2 ms-sm-3 flex-grow-1">
                <p className="mb-1 fw-semibold" style={{ fontSize: "14px" }}>
                  {product?.name} <br />
                  <span className="text-muted">
                    {product?.category} / {item.quantity} Bottle
                  </span>
                </p>
              </div>

              <span className="fw-semibold text-nowrap" style={{ fontSize: "14px" }}>
                ₹{product?.price}
              </span>
            </div>
          );
        })}

        {/* SUMMARY */}
        <div className="mt-4">

          <div className="mb-2 d-flex justify-content-between">
            <span className="text-muted">
              Subtotal: <b>{cart?.length || 0} items</b>
            </span>
            <span className="fw-semibold">₹{cartTotal.toFixed(2)}</span>
          </div>

          <div className="mb-3 d-flex justify-content-between">
            <span className="text-muted">Shipping:</span>
            <span className="fw-semibold">₹50</span>
          </div>

          <hr />

          {/* TOTAL */}
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="mb-0 fw-bold">Total</h5>
              <small className="text-muted">Total Amount (inclusive of all taxes)</small>
            </div>

            <h5 className="fw-bold text-nowrap">INR {finalAmount.toFixed(2)}</h5>
          </div>

        </div>
      </div>
    </>
  );
};

export default SummaryB;
