import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import { BsLink, BsSearch } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineBank } from "react-icons/ai";
import {
    MdOutlineAccountBalanceWallet,
    MdOutlineContentCopy,
    MdOutlineDeleteOutline,
    MdOutlineManageAccounts,
    MdOutlineNotificationsActive,
} from "react-icons/md";
import { RiDonutChartFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SidePanel = () => {

    const [createaffiliatelink, setcreateaffiliatelink] = useState(false);
    const setcreateaffiliatelinkclose = () => setcreateaffiliatelink(false);
    const setcreateaffiliatelinkshow = () => setcreateaffiliatelink(true);

    return (
        <div className="side-panel">
            <div className="create-book">
                <button
                    className="btn btn-green"
                    onClick={setcreateaffiliatelinkshow}
                >
                    <BsLink /> Create Book Link
                </button>
            </div>
            <Modal
                show={createaffiliatelink}
                onHide={setcreateaffiliatelinkclose}
                className="large-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Affiliate Link</Modal.Title>
                </Modal.Header>
                <Modal.Body className="has-footer">
                    <div className="create-affiliate-link-popup">
                        <div className="input-field-item">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="input-box"
                                placeholder="Albert"
                            ></input>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="header-search">
                                <input
                                    className="input-box"
                                    placeholder="Search book name or author name"
                                ></input>
                                <BsSearch />
                            </div>
                            <div className="btn-wrap">
                                <div className="btn btn-secondary">Search</div>
                            </div>
                        </div>
                        <p className="fs-18 mb-4 fw-600">Campaign Type</p>
                        <div className="checkbox-group d-flex">
                            <div className="form-check me-4 pe-1 mb-0">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck1"
                                ></input>
                                <label className="form-check-label" for="defaultCheck1">
                                    Lead Generation
                                </label>
                            </div>
                            <div className="form-check me-4 pe-1 mb-0">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck2"
                                ></input>
                                <label className="form-check-label" for="defaultCheck2">
                                    Lead Conversion
                                </label>
                            </div>
                        </div>
                        <div className="transcation-summary">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <p className="fs-18 mb-3 fw-600">Campaign Links</p>
                                <div className="btn-wrap">
                                    <div className="btn btn-secondary">Add Link</div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="transcation-summary-table">
                                    <tr>
                                        <th>Link Name</th>
                                        <th>Link</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td>Genral Link</td>
                                        <td>
                                            https://affiliate.dc/mahtma-gandhi-bis0asd-asdfsaf-asfsafsaf
                                        </td>
                                        <td>
                                            <div className="action">
                                                <a href="#" title="Copy" className="edit">
                                                    <MdOutlineContentCopy />
                                                </a>
                                                <a href="#" title="Delete" className="delete">
                                                    <MdOutlineDeleteOutline />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Genral Link</td>
                                        <td>
                                            https://affiliate.dc/mahtma-gandhi-bis0asd-asdfsaf-asfsafsaf
                                        </td>
                                        <td>
                                            <div className="action">
                                                <a href="#" title="Copy" className="edit">
                                                    <MdOutlineContentCopy />
                                                </a>
                                                <a href="#" title="Delete" className="delete">
                                                    <MdOutlineDeleteOutline />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn-wrap">
                        <button className="btn btn-green">Done</button>
                    </div>
                </Modal.Footer>
            </Modal>
            <div className="tab-item-link">
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <NavLink to="/"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"} end>
                            <p>
                                <RxDashboard />
                                Dashboard
                            </p>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/Wallet"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"} end>
                            <p>
                                <MdOutlineAccountBalanceWallet />
                                Wallet
                            </p>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/Reports"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"} end>
                           <p>
                                <RiDonutChartFill />
                                Reports
                            </p>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/PaymentOption"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"} end>
                            <p>
                                <AiOutlineBank />
                                Payment Options
                            </p>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/Notification"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"} end>
                           <p>
                                <MdOutlineNotificationsActive />
                                Notifications
                            </p>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/Profile_Settings"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"} end>
                              <p>
                                <MdOutlineManageAccounts />
                                Profile & Settings
                            </p>
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}

export default SidePanel