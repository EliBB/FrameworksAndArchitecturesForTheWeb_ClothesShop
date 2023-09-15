import React from "react";
import "./footer.css";
import "../globalStyles.css";

export default function Footer() {
  return (
    <>
      <div className="line"></div>
      <footer className="footer">
        <div className="footer-item">
          <h2>HELP and INFORMATION</h2>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Student discount</p>
          <p>Premium membership</p>
          <p>Hugs and kisses</p>
        </div>

        <div className="footer-item">
          <h2>ABOUT US</h2>
          <p>History</p>
          <p>Policy</p>
          <p>Climate awareness</p>
          <p>Corporate resoponsibility</p>
        </div>

        <div className="footer-item">
          <h2>OUR PARTNERS</h2>
          <p>KLAK Couture</p>
          <p>Slippery LUBE</p>
          <p>ELIBeral politics</p>
          <p>Bouncing JBAL</p>
        </div>
      </footer>
    </>
  );
}