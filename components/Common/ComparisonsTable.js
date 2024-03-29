import React from "react";

const ComparisonsTable = () => {
  return (
    <>
      <div className="comparisons-area ptb-70 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Compare us with others</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="comparisons-table table-responsive">
            <table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Packages</th>
                  <th scope="col">Freelancer</th>
                  <th scope="col">Householder</th>
                  <th scope="col">Business Man</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Control payout timing</td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                </tr>
                <tr>
                  <td>Transparent payouts</td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-cancel"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                </tr>
                <tr>
                  <td>Automate evidence submission</td>
                  <td>
                    <i className="flaticon-cancel"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                </tr>
                <tr>
                  <td>Collaboration notes</td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-cancel"></i>
                  </td>
                  <td>
                    <i className="flaticon-cancel"></i>
                  </td>
                </tr>
                <tr>
                  <td>Deposit tagging</td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-cancel"></i>
                  </td>
                </tr>
                <tr>
                  <td>Technical support over IRC</td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                </tr>
                <tr>
                  <td>24×7 support</td>
                  <td>
                    <i className="flaticon-cancel"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                  <td>
                    <i className="flaticon-check-mark"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonsTable;
