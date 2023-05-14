import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {  BsSearch } from "react-icons/bs";
import {AiOutlineBank} from "react-icons/ai";
import {MdOutlineArrowForwardIos} from "react-icons/md";

const Wallet = () => {
  const [withdrawmoney, setwithdrawmoney] = useState(false);
  const setwithdrawmoneyclose = () => setwithdrawmoney(false);
  const setwithdrawmoneyshow = () => setwithdrawmoney(true);

  return (
    <div className="wallet-tab-content">
      <div className="tab-content-heading d-flex justify-content-between align-items-center">
        <h2>My Wallet</h2>
        <div className="right-side d-flex">
          <div className="action">
            <button
              className="btn btn-green"
              onClick={setwithdrawmoneyshow}
            >
              <AiOutlineBank className="fs-20 me-2" /> Transfer to
              Bank
            </button>
            <Modal
              show={withdrawmoney}
              onHide={setwithdrawmoneyclose}
              className="large-modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Withdraw Money</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="withdraw-money-modal">
                  <div className="bank-list">
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <AiOutlineBank />
                      </div>
                      <div>
                        <p className="fs-18 mb-1 fw-500">
                          Nick Tyson
                        </p>
                        <span className="fs-16 light-grey">
                          2183XXXXXX001
                        </span>
                      </div>
                    </div>
                    <a href="#" className="info-state">
                      Change
                    </a>
                  </div>
                  <div className="amount-details">
                    <p className="fs-18 mb-2 fw-500">Amount</p>
                    <span className="fs-16 light-grey">
                      How much would you like to withdraw?
                    </span>
                    <div className="amount-number">
                      <h2>$100.00</h2>
                      <p>
                        Available Balance:{" "}
                        <span className="light-grey">
                          $546.50
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="input-item">
                    <label>Payment Description (Optional)</label>
                    <textarea
                      className="input-box"
                      placeholder="Write description about this transaction..."
                    ></textarea>
                  </div>
                  <div className="btn-wrap w-100">
                    <button className="btn btn-primary w-100">
                      Withdraw
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
      <div className="wallet-items">
        <div className="column">
          <ul className="data-info-list">
            <li>
              <div className="heading d-flex justify-content-between align-items-center">
                <p className="light-grey fs-16 fw-500">
                  Previous payout
                </p>
                <p className="fs-14 light-grey fw-500">
                  Sept 22, 2022
                </p>
              </div>
              <h2>
                $500.00 <span className="label">Paid</span>
              </h2>
              <a href="#">
                View transactions{" "}
                <MdOutlineArrowForwardIos className="ms-1" />
              </a>
            </li>
            <li>
              <div className="heading d-flex justify-content-between align-items-center">
                <p className="light-grey fs-16 fw-500">
                  Previous payout
                </p>
                <p className="fs-14 light-grey fw-500">
                  Sept 22, 2022
                </p>
              </div>
              <h2>
                $500.00 <span className="label">Paid</span>
              </h2>
              <a href="#">
                View transactions{" "}
                <MdOutlineArrowForwardIos className="ms-1" />
              </a>
            </li>
            <li>
              <div className="heading d-flex justify-content-between align-items-center">
                <p className="light-grey fs-16 fw-500">
                  Previous payout
                </p>
                <p className="fs-14 light-grey fw-500">
                  Sept 22, 2022
                </p>
              </div>
              <h2>
                $500.00{" "}
                <span className="label pending">Pending</span>
              </h2>
              <a href="#">
                View transactions{" "}
                <MdOutlineArrowForwardIos className="ms-1" />
              </a>
            </li>
          </ul>
        </div>
        <div className="current-balance">
          <div className="heading d-flex justify-content-between align-items-center">
            <p>Your current balance</p>
          </div>
          <h2>$90.16</h2>
        </div>
      </div>
      <div className="transcation-summary">
        <div className="tab-content-heading d-flex justify-content-between align-items-center">
          <h2 className="fs-20">Transaction Summary</h2>
          <div className="right-side d-flex">
            <div className="header-search">
              <input
                className="input-box"
                placeholder="Search..."
              ></input>
              <BsSearch />
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="transcation-summary-table">
            <tr>
              <th>Type</th>
              <th>Date & Time</th>
              <th>Payment Detils</th>
              <th>Payment Mehod</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
            <tr>
              <td>
                <p className="label red-view">Debit</p>
              </td>
              <td>Aug 28,2022 , 2:30PM</td>
              <td>Book Purchased</td>
              <td>Wallet</td>
              <td>
                <p className="danger-color">-$10</p>
              </td>
              <td>$300</td>
            </tr>
            <tr>
              <td>
                <p className="label green-view">Cebit</p>
              </td>
              <td>Aug 28,2022 , 2:30PM</td>
              <td>Book Purchased</td>
              <td>Wallet</td>
              <td>
                <p className="green-color">+$10</p>
              </td>
              <td>$300</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Wallet