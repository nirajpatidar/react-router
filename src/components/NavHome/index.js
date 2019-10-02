import React, { Component,useState, useEffect } from 'react';
import { Formik, FieldProps, Field, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Select from 'react-select';
import parseISO from 'date-fns/esm/parseISO/index'
// import "node_modules/react-select/dist/react-select.css";
import { Option, ReactSelectProps } from 'react-select';
const options = [
    { value: 'Food', label: 'Food' },
    { value: 'Being Fabulous', label: 'Being Fabulous' },
    { value: 'Ken Wheeler', label: 'Ken Wheeler' },
    { value: 'ReasonML', label: 'ReasonML' },
    { value: 'Unicorns', label: 'Unicorns' },
    { value: 'Kittens', label: 'Kittens' },
  ];
class NavHome extends Component {

    render() {
        return (
            <div>
                Nav Home

              <div>
               <h1>Friend List</h1>
                <Formik
                  initialValues={{ friends: ['jared', 'ian', 'brent'] }}
                  onSubmit={values =>
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                    }, 500)
                  }
                  render={({ values }) => (
                    <Form>
                      <FieldArray
                        name="friends"
                        render={arrayHelpers => (
                          <div>
                            {values.friends && values.friends.length > 0 ? (
                              values.friends.map((friend, index) => (
                                <div key={index}>
                                  <Field name={`friends.${index}`} />
                                  
                                </div>
                              ))
                            ) : (
                              <button type="button" onClick={() => arrayHelpers.push('')}>
                                {/* show this when user has removed all friends from the list */}
                                Add a friend
                              </button>
                            )}
                            <div>
                              <button type="submit">Submit</button>
                            </div>
                          </div>
                        )}
                      />
                    </Form>
                  )}
                />
                </div>

                <Formik
                    initialValues={{ email: '', closeDate: '', example: "" }}
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
                            <Field name={'example'} onBlur={handleBlur} component={SelectField} options={options} values={values.example} />
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

const SelectField : React.SFC<ReactSelectProps & FieldProps> = ({
    options,
    field,
    form,
    values
  }) => {
    console.log(field)
    return (
    <Select
    defaultValue={{ label: "Select Dept", value: 0 }}
      options={options}
      name={field.name}
      value={values ? {value: values,label: values}: ''}
      onChange={(option: Option) => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
    />
  )}
const DatePickerField = ({ name, value, onChange }) => {
    console.log('datepicker', name)
    return (
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={value }
        onChange={val => {
          onChange(name, (moment(val).toISOString()).format('yyyy-MM-dd'));
        }}
      />
    );
  };


export default NavHome;