import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaChevronDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { format } from 'date-fns'
import { update } from "../../slices/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile_Settings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { affiliater, isLoggedIn } = useSelector((state) => state.auth)

  const initialValues = {
    payeeName: affiliater && affiliater.payeeName || "",
    postalCode: affiliater && affiliater.postalCode || "",
    email: affiliater && affiliater.email || "",
    phone: affiliater && affiliater.phone || "",
    addressLineOne: affiliater && affiliater.addressLineOne || "",
    addressLineSecond: affiliater && affiliater.addressLineSecond || "",
  };

  const validationSchema = Yup.object().shape({
    payeeName: Yup.string().required("This field is required!"),
    postalCode: Yup.string().required("This field is required!"),
    email: Yup.string().required("This field is required!"),
    phone: Yup.string().required("This field is required!"),
  });

  const handleUpdate = (formValue) => {
    console.log({ affilaterId: affiliater._id, ...formValue })
    setLoading(true);
    dispatch(update({ affilaterId: affiliater._id, ...formValue }))
      .then((response) => {
        if (response.payload.affiliater) {
          toast.success("Info Updated !!", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
  }, [affiliater])
  return (
    <div className="profile-setting-tab-content">
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleUpdate}
      >
        {affiliater && isLoggedIn && <Form>
          <div className="tab-content-heading d-flex justify-content-between align-items-center">
            <h2>Update Account Information</h2>
          </div>
          <div className="input-field-group">
            <div className="input-field-item">
              <label>Payee Name</label>
              <Field type="text" name="payeeName" className='input-box' placeholder='payeeName' />
              <ErrorMessage
                name="payeeName"
                component="p"
                className="alert alert-danger"
              />
            </div>
            <div className="input-field-item">
              <p className="light-grey fs-14">
                Enter the name exactly as it appears on the bank
                account that is being used for payment.
              </p>
            </div>
            <div className="input-field-item">
              <label>Mobile Number</label>
              <Field type="number" name="phone" className='input-box' placeholder='785412545' />
              <ErrorMessage
                name="phone"
                component="p"
                className="alert alert-danger"
              />
            </div>
            <div className="input-field-item">
              <label>Email</label>
              <Field type="email" name="email" className='input-box' placeholder='Email' />
              <ErrorMessage
                name="email"
                component="p"
                className="alert alert-danger"
              />
            </div>
            <div className="input-field-item">
              <label>Address Line 1</label>
              <Field type="text" name="addressLineOne" className='input-box' />
              <ErrorMessage
                name="addressLineOne"
                component="p"
                className="alert alert-danger"
              />
            </div>
            <div className="input-field-item">
              <label>Address Line 2</label>
              <Field type="text" name="addressLineSecond" className='input-box' />
              <ErrorMessage
                name="addressLineSecond"
                component="p"
                className="alert alert-danger"
              />
            </div>
            <div className="input-field-item">
              <label>City</label>
              <Field  name="color" as="select" className="input-box" >
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </Field>
            </div>
            <div className="input-field-item">
              <label>State</label>
              <Field  name="color" as="select" className="input-box" >
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </Field>
            </div>
            <div className="input-field-item">
              <label>Postal Code</label>
              <Field type="text" name="postalCode" className='input-box' />
              <ErrorMessage
                name="postalCode"
                component="p"
                className="alert alert-danger"
              />
            </div>
            <div className="input-field-item">
              <label>Country</label>
              <Field name="color" as="select" className="input-box" >
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </Field>
            </div>

          </div>
          <div className="btn-wrap mt-3">
            <button type="submit" className="btn btn-primary">
              <span> Update Profile &nbsp;</span>  {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
            </button>
          </div>
        </Form>}
      </Formik>
    </div>
  )
}

export default Profile_Settings
