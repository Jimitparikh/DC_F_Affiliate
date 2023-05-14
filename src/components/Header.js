import React, { useState } from "react";
import './Header.css';
import logo from "../images/logo-white.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsBell } from "react-icons/bs";
import { FaRegEdit, FaRegUser } from 'react-icons/fa';
import { MdOutlineAccountBalanceWallet,MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../slices/auth";
import { setDrawerClose, setDrawerOpen } from "../slices/stateSlice";

const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { affiliater } = useSelector((state) => state.auth)
  const { drawerOpen } = useSelector((state)=> state.state)

  const toggleClass = () => {
    drawerOpen ? dispatch(setDrawerClose()) : dispatch(setDrawerOpen()); 
  };

  const logouthandler = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
      });
  }

  return (
    <div className="authors-dashboard-header d-flex align-items-center">
      <div className="column mobile-menu" onClick={toggleClass}>
        <HiMenu />
      </div>
      <div className="column">
        <a href="#" className="logo">
          <img src={logo} alt="Logo"></img>
        </a>
      </div>
      <div className="column d-flex">
        <div className="icon">
          <BsBell />
          <div className="notification-circle"></div>
        </div>
        <div className="icon">
          <div className="header-middle  user-activate">
            <Dropdown className="user-profile-dropdown" align="end">
              <Dropdown.Toggle id="dropdown-basic">
                <FaRegUser />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className='profile-detail d-flex align-items-center'>
                  <FaRegUser />
                  <div className='user-name'>
                    <h5>{affiliater && affiliater.payeeName}</h5>
                  </div>
                </div>
                <div className='line'></div>
                <Dropdown.Item >
                  <MdOutlineSpaceDashboard /> <Link className='link' to='/'>My dashboard</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <MdOutlineAccountBalanceWallet /><Link className='link' to='/Wallet'>My Wallet</Link>
                </Dropdown.Item>
                <div className='line'></div>
                <Dropdown.Item >
                  <FaRegEdit /><Link className='link' to='/Profile_Settings'>Profile & Settings</Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => { logouthandler() }}>
                  <AiOutlinePoweroff />Log Out
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header