import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
class NavHome extends Component {

    render() {
        return (
            <div>
                Nav Home
                <Formik
                    initialValues={{ email: '', closeDate: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 500);
                    }}
                    // validationSchema={Yup.object().shape({
                    //     email: Yup.string()
                    //     .email()
                    //     .required('Required'),
                    // })}
                    >
                    {props => {
                        const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                        setFieldValue
                        } = props;
                        return (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email" style={{ display: 'block' }}>
                            Email
                            </label>
                            <input
                            id="email"
                            placeholder="Enter your email"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.email && touched.email ? 'text-input error' : 'text-input'
                            }
                            />
                            {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                            )}
                            <label htmlFor="closeDate" style={{ display: 'block' }}>
                            Clodedate
                            </label>
                            <DatePickerField
                                name="closeDate"
                                value={values.closeDate}
                                onChange={setFieldValue}
                            />
                            {errors.closeDate && touched.closeDate && (
                            <div className="input-feedback">{errors.closeDate}</div>
                            )}
                            <button
                            type="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                            >
                            Reset
                            </button>
                            <button type="submit" disabled={isSubmitting}>
                            Submit
                            </button>
                        </form>
                        );
                    }}
                    </Formik>
            </div>
        );
    }
}

const DatePickerField = ({ name, value, onChange }) => {
    console.log('datepicker', value)
    return (
      <DatePicker
        selected={(value && moment(new Date().toUTCString()).toDate()) || null}
        onChange={val => {
            alert(val)
            
          onChange(name, moment().format('YYYY-MM-DD'));
        }}
      />
    );
  };
export default NavHome;