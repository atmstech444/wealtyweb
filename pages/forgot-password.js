import React from "react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="signup-area">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="signup-image">
              <img src="/images/signup-bg.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="signup-content">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="signup-form">
                    <div className="logo">
                      <Link href="/">
                         
                          <img src="/images/logo.png" alt="image" className="logo-image-size"/>
                      
                      </Link>
                    </div>

                    <h3>Forgot password</h3>
                    <p>
                      Already signed up?{" "}
                      <Link href="/login">
                        Log in
                      </Link>
                    </p>

                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your email address"
                          className="form-control"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
