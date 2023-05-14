import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { get_Settings, update_Settings } from "./dataSlice";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { injectReducer } from '../../store/index'
import reducer from './store'
injectReducer('notificationSettings', reducer)

const Notification = () => {
  const dispatch = useDispatch()
  const formData = new FormData()

  const { affiliater } = useSelector((state) => state.auth)
  const { settings } = useSelector((state) => state.notificationSettings.data)

  const onUpdateSettings = (name, value) => {
    formData.append("userId", affiliater._id)
    formData.append(name, value)
    dispatch(update_Settings(formData)).then((response) => {
      if (response.payload.success === true) {
        toast.success(response.payload.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        dispatch(get_Settings({ userId: affiliater._id }))
      }
    })
  }

  useEffect(() => {
    dispatch(get_Settings({ userId: affiliater._id }))
  }, [])
  return (
    <div className="notification-tab-content">
      <ToastContainer
      />
      <div className="tab-content-heading d-flex justify-content-between align-items-center">
        <h2>Manage Email & Notifications</h2>
      </div>
      <div className="profile-setting-tab">
        <div className="email-setting">
          <h2 className="title">
            <HiOutlineMail />
            Emails Setting
          </h2>
          <ul>
            <li>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="reminderEmails"
                  checked={settings.reminderEmails}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="Reminder Emails"
                />
              </Form>
              <p>Get notification you may have missed.</p>
            </li>
            <li>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="newsEmails"
                  checked={settings.newsEmails}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="News Emails"
                />
              </Form>
              <p>
                Learn about the new features and Dreamcapcha’s
                related News
              </p>
            </li>
            <li>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="productEmails"
                  checked={settings.productEmails}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="Product Emails"
                />
              </Form>
              <p>Get tips on Dreamcapcha tools</p>
            </li>
            <li>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="optionEmails"
                  checked={settings.optionEmails}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="Opinion Emails"
                />
              </Form>
              <p>Give Feedback on Dreamcapcha’s New Features.</p>
            </li>
            <li>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="payment"
                  checked={settings.payment}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="Payment"
                />
              </Form>
              <p>Get notification About payment settlements or failed transaction </p>
            </li>
            <li>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="monthlyReport"
                  checked={settings.monthlyReport}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="Monthly Report"
                />
              </Form>
              <p>Get tips on Dreamcapcha tools.</p>
            </li>
          </ul>
        </div>
        <div className="general-setting">
          <h2 className="title">
            <MdOutlineNotificationsActive />
            General Notification Setting
          </h2>
          <ul>
            <li>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="newOffers"
                  checked={settings.newOffers}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="New Offers"
                />
              </Form>
              <p>
                Get notification when someone like your book &
                comments
              </p>
            </li>
            <li>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="successfulBookSold"
                  checked={settings.successfulBookSold}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="Sucessfull Book Sold"
                />
              </Form>
              <p>
                Get notification when someone Give Feedback on
                your books
              </p>
            </li>
            <li className="mb-0">
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="dailyClickOnLink"
                  checked={settings.dailyClickOnLink}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="Daily Clicks on link"
                />
              </Form>
              <p>
                You have notifiactions you haven’t seen and
                othersimilar notifications.
              </p>
            </li>
            <li className="mb-0">
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="bankRelated"
                  checked={settings.bankRelated}
                  onChange={e => onUpdateSettings(e.target.name, e.target.checked)}
                  label="Bank Related"
                />
              </Form>
              <p>
                You have notifiactions you haven’t seen and
                othersimilar notifications.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

}

export default Notification