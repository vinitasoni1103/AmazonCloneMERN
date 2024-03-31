import React from 'react';
import "./cart.css";
import { Divider } from '@mui/material';

const Cart = () => {
  return <div className='cart_section'>
    <div className='cart_container'>
        <div className='left_cart'>
            <img src='https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70' alt='cart_img'/>
            <div className='cart_btn'>
                <button className='cart_btn1'>Add to Cart</button>
                <button className='cart_btn2'>Buy Now</button>
            </div>
        </div>
        <div className="right_cart">
            <h3>Smart Watches</h3>
            <h4>Molife Sense 500 Smartwatch  (Black Strap, Freesize)</h4>
            <Divider />
            <p className="mrp">M.R.P. : 6999</p>
            <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹4049</span></p>
            <p>You save : <span style={{ color: "#B12704" }}> ₹6999 - 4049 (42%) </span></p>
        <div className="discount_box">
            <h5 >Discount : <span style={{ color: "#111" }}>Grab Now</span> </h5>
            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Mar 31 - 20</span> Details</h4>
            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
        </div>
            <p className="description">  <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.</span></p>

        </div>
    </div>
</div>;
  
}

export default Cart
