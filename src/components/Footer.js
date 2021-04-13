import React from 'react'

export default function Footer() {
    return (
            <div className="footer-component mt-5">
                <div className="footer-services">
                    <h5>Removal Services</h5>
                    <p>Furniture Removal</p>
                    <p>Garage Clean Out</p>
                    <p>Storage Unit Clean Out</p>
                    <p>Foreclosure Clean Out</p>
                    <p>Office Clean Out</p>
                </div>
                <div className="footer-info">
                    <h5>Hope's Hauling</h5>
                    <p style={{ margin: "0", fontWeight: "700" }}>Call us at</p>
                    <p>123-456-7890</p>
                    <a href="http://localhost:3000/">Pricing</a> <br />
                    <a href="http://localhost:3000/">About Us</a> <br />
                    <a href="http://localhost:3000/">Facebook</a> <br />
                    <a href="http://localhost:3000/">Instagram</a> <br />
                </div>
            </div>
    )
}
