import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Dropdown from "react-bootstrap/Dropdown";
import { BsArrowRepeat, BsFillCheckCircleFill, BsLink, BsSearch } from "react-icons/bs";
import {AiOutlineBank,AiOutlineEye,AiOutlinePlus} from "react-icons/ai";
import {
  MdOutlineArrowForwardIos,
  MdOutlineContentCopy,
  MdOutlineDeleteOutline,
  MdOutlineModeEditOutline,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import {HiOutlineMail} from "react-icons/hi";
import { FaChevronDown} from "react-icons/fa";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import visalogo from "../../images/visa-logo.png";
import mastercardlogo from "../../images/mastercard-logo.png";

const PaymentOptions = () => {

  const [pricingpopup, setpricingpopup] = useState(false);
  const setpricingpopupclose = () => setpricingpopup(false);
  const setpricingpopupshow = () => setpricingpopup(true);
  return (
    <div className="bank-details-tab">
    <div className="tab-content-heading d-flex justify-content-between align-items-center">
      <h2>Manage Payment Options</h2>
      <div className="right-side d-flex">
        <div className="action">
          <button
            className="btn btn-green"
            onClick={setpricingpopupshow}
          >
            <AiOutlinePlus className="fs-20 me-2" /> Add New
            Bank Account
          </button>
          <Modal
            show={pricingpopup}
            onHide={setpricingpopupclose}
            className="large-modal"
          >
            <Modal.Header
              closeButton
              className="border-0"
            ></Modal.Header>
            <Modal.Body>
              <div className="pricing-page-modal">
                <h1>Choose Your Plans</h1>
                <p className="desc">
                  Lorem ipsum is dummy he History of Tom Jones,
                  a Foundling by Henry Fielding
                </p>
                <div className="pricing-page-modal-tab">
                  <Tabs
                    defaultActiveKey="yearly"
                    transition={false}
                    id="fill-tab-example"
                  >
                    <Tab eventKey="yearly" title="Bill yearly /Save 10% total">
                      <div className="tab-content-data">
                        <ul>
                          <li>
                            <div className="heading">
                              <div className="title">
                                <span>Basic plan</span>
                              </div>
                              <h2>$10<span>per month</span></h2>
                              <p>Lorem ipsum is a dummy text</p>
                            </div>
                            <div className="feature-list">
                              <p>FEATURES</p>
                              <span>Everything in our free paln plus...</span>
                              <div className="feature-list-item">
                                <div className="d-flex">
                                  <BsFillCheckCircleFill />
                                  <p>Lorem ipsum is dummy </p>
                                </div>
                                <div className="d-flex">
                                  <BsFillCheckCircleFill />
                                  <p>Lorem ipsum is dummy </p>
                                </div>
                                <div className="d-flex">
                                  <BsFillCheckCircleFill />
                                  <p>Lorem ipsum is dummy </p>
                                </div>
                              </div>
                              <div className="btn-wrap">
                                <button className="btn btn-primary">Get started</button>
                              </div>
                            </div>

                          </li>
                          <li className="active">
                            <div className="heading">
                              <div className="title">
                                <span>Business plan</span>
                                <p>Popular</p>
                              </div>
                              <h2>$10<span>per month</span></h2>
                              <p>Lorem ipsum is a dummy text</p>
                            </div>
                            <div className="feature-list">
                              <p>FEATURES</p>
                              <span>Everything in our free paln plus...</span>
                              <div className="feature-list-item">
                                <div className="d-flex">
                                  <BsFillCheckCircleFill />
                                  <p>Lorem ipsum is dummy </p>
                                </div>
                                <div className="d-flex">
                                  <BsFillCheckCircleFill />
                                  <p>Lorem ipsum is dummy </p>
                                </div>
                                <div className="d-flex">
                                  <BsFillCheckCircleFill />
                                  <p>Lorem ipsum is dummy </p>
                                </div>
                              </div>
                              <div className="btn-wrap">
                                <button className="btn btn-primary">Get started</button>
                              </div>
                            </div>

                          </li>
                          <li>
                            <div className="heading">
                              <div className="title">
                                <span>Enterprise plan</span>
                              </div>
                              <h2>$10<span>per month</span></h2>
                              <p>Lorem ipsum is a dummy text</p>
                            </div>
                            <div className="feature-list">
                              <p>FEATURES</p>
                              <span>Everything in our free paln plus...</span>
                              <div className="feature-list-item">
                                <div className="d-flex">
                                  <BsFillCheckCircleFill />
                                  <p>Lorem ipsum is dummy </p>
                                </div>
                                <div className="d-flex">
                                  <BsFillCheckCircleFill />
                                  <p>Lorem ipsum is dummy </p>
                                </div>
                                <div className="d-flex">
                                  <BsFillCheckCircleFill />
                                  <p>Lorem ipsum is dummy </p>
                                </div>
                              </div>
                              <div className="btn-wrap">
                                <button className="btn btn-primary">Get started</button>
                              </div>
                            </div>

                          </li>
                        </ul>
                      </div>
                    </Tab>
                    <Tab eventKey="monthly" title="Bill monthly">
                      <div className="tab-content-data">
                        Tab content comes here
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
    <div className="transcation-summary">
      <div className="table-responsive">
        <table className="transcation-summary-table">
          <tr>
            <th>Bank</th>
            <th>Account Number</th>
            <th>Bank Holder Name</th>
            <th>CPF/CNJ</th>
            <th>Bank Type</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src={visalogo} alt="Visa Logo"></img>
            </td>
            <td>344******234</td>
            <td>Luke Paul</td>
            <td>RBC0000007</td>
            <td>
              <p className="label">Primary</p>
            </td>
            <td>
              <div className="action">
                <a href="#" title="Edit" className="edit">
                  <MdOutlineModeEditOutline />
                </a>
                <a
                  href="#"
                  title="Edit"
                  className="edit repeat-arrow ms-2 disabled"
                >
                  <BsArrowRepeat />
                </a>
                <a
                  href="#"
                  title="Delete"
                  className="delete ms-2"
                >
                  <MdOutlineDeleteOutline />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src={mastercardlogo} alt="Visa Logo"></img>
            </td>
            <td>344******234</td>
            <td>Luke Paul</td>
            <td>RBC0000007</td>
            <td>
              <p className="label secondary">Secondary</p>
            </td>
            <td>
              <div className="action">
                <a href="#" title="Edit" className="edit">
                  <MdOutlineModeEditOutline />
                </a>
                <a
                  title="Edit"
                  className="edit ms-2 repeat-arrow"
                >
                  <BsArrowRepeat />
                </a>
                <a
                  href="#"
                  title="Delete"
                  className="delete ms-2"
                >
                  <MdOutlineDeleteOutline />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src={visalogo} alt="Visa Logo"></img>
            </td>
            <td>344******234</td>
            <td>Luke Paul</td>
            <td>RBC0000007</td>
            <td>
              <p className="label">Primary</p>
            </td>
            <td>
              <div className="action">
                <a href="#" title="Edit" className="edit">
                  <MdOutlineModeEditOutline />
                </a>
                <a
                  href="#"
                  title="Edit"
                  className="edit ms-2 repeat-arrow"
                >
                  <BsArrowRepeat />
                </a>
                <a
                  href="#"
                  title="Delete"
                  className="delete ms-2"
                >
                  <MdOutlineDeleteOutline />
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  )
}

export default PaymentOptions
