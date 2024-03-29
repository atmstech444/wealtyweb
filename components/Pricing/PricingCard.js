import React from "react";
import Link from "next/link";

const PricingCard = () => {
  return (
    <>
      <div className="pricing-area pt-70 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Basic</h3>
                  <p>Get your business up and running</p>
                </div>

                <div className="price">
                  <span className="symbol">$</span> 0 <span>/ monthly</span>
                </div>

                <ul className="pricing-features">
                  <li>
                    100 outgoing transfers/mo
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    5 Haiper Users
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    2 Business Mastercards
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    Premium Support
                    <i className="fa fa-ban"></i>
                  </li>
                  <li>
                    International payments
                    <i className="fa fa-ban"></i>
                  </li>
                  <li>
                    Accounting integrations
                    <i className="fa fa-ban"></i>
                  </li>
                </ul>

                <div className="buy-btn">
                  <Link href="#" className="btn btn-primary">
                    Choose this plan
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box active">
                <div className="pricing-header">
                  <h3>Advanced</h3>
                  <p>Get your business up and running</p>
                </div>

                <div className="price">
                  <span className="symbol">$</span> 20 <span>/ monthly</span>
                </div>

                <ul className="pricing-features">
                  <li>
                    100 outgoing transfers/mo
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    5 Haiper Users
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    2 Business Mastercards
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    Premium Support
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    International payments
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    Accounting integrations
                    <i className="fa fa-ban"></i>
                  </li>
                </ul>

                <div className="buy-btn">
                  <Link href="#" className="btn btn-primary">
                    Choose this plan
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Premium</h3>
                  <p>Get your business up and running</p>
                </div>

                <div className="price">
                  <span className="symbol">$</span> 24 <span>/ monthly</span>
                </div>

                <ul className="pricing-features">
                  <li>
                    100 outgoing transfers/mo
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    5 Haiper Users
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    2 Business Mastercards
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    Premium Support
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    International payments
                    <i className="fas fa-check"></i>
                  </li>
                  <li>
                    Accounting integrations
                    <i className="fas fa-check"></i>
                  </li>
                </ul>

                <div className="buy-btn">
                  <Link href="#" className="btn btn-primary">
                    Choose this plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
