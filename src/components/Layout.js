import React, {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Header from "./Header";
import SidePanel from "./SidePanel";
import { useNavigate, Outlet } from "react-router-dom";

const Layout = (props) => {
  let navigate = useNavigate();
  const {isLoggedIn }= useSelector((state) => state.auth)
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  useEffect(()=> {
    if(!isLoggedIn){
      navigate("/login")
    }
  })

  return (
    <>
      <section className="authors-dashboard-section affiliate-dashboard">
        <Header />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div
            className={
              isActive
                ? "show author-tabbing-wrapper d-flex flex-wrap"
                : "author-tabbing-wrapper d-flex flex-wrap"
            }
          >
          <SidePanel/>
            <div className="author-tabbing-content">
              <Outlet/>
            </div>
          </div>
        </Tab.Container>
      </section>
    </>
  );
};
export default Layout;
