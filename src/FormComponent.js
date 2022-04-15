import React from "react";
import { useForm } from 'react-hook-form';

const FormComponent = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(JSON.stringify(data));
    };

    return (
        <div className="container">
            <div className="row register-form ">
                <h1>React hook form validation - technostuf.com</h1>
                <div className="col-md-6" >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="control-label">First Name</label>
                            <input
                                name="firstName"
                                type="text"
                                {...register('firstName', {
                                    required: {
                                        value: true,
                                        message: "Please enter the first name"
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximum 20 characters allowed"
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "Minimum 2 characters required"
                                    }
                                })}
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                name="lastName"
                                type="text"
                                {...register('lastName', {
                                    required: {
                                        value: true,
                                        message: "Please enter the last name"
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximum 20 characters allowed"
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "Minimum 2 characters required"
                                    }
                                })}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                type="text"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: "Please enter the email address"
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>

                        <div className="form-group">
                            <label>Mobile</label>
                            <input
                                name="mobile"
                                type="text"
                                {...register('mobile', {
                                    required: {
                                        value: true,
                                        message: "Please enter the mobile number"
                                    },
                                    pattern: {
                                        value: /^[0-9+-]+$/,
                                        message: "Please enter the valid phone number"
                                    },
                                })}
                                className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.mobile?.message}</div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                            <button type="button" onClick={() => reset()}
                                className="btn btn-warning float-right" >
                                Reset
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </div>
    )
}
export default FormComponent;