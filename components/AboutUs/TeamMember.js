import React from "react";

const TeamMember = () => {
  return (
    <>
      <div className="team-area pt-70 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Meet our team</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img src="/images/team/team1.jpg" alt="Team Image" />

                  <ul className="social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="member-content">
                  <h3>Harry Kane</h3>
                  <span>Founder & Consultant</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img src="/images/team/team2.jpg" alt="Team Image" />

                  <ul className="social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="member-content">
                  <h3>Raheem Sterling</h3>
                  <span>Head Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img src="/images/team/team3.jpg" alt="Team Image" />

                  <ul className="social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="member-content">
                  <h3>Kyle Walker</h3>
                  <span>Marketing Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
