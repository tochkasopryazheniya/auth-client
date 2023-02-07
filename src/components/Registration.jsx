import React, {useState} from 'react';
import img from '../assets/images/img-01.png'
import {Link} from "react-router-dom";
import AuthStore from "../store/AuthStore";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {registration} = AuthStore;

    const onSubmit = () => {
        registration(email, password)
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt">
                        <img src={img} alt="IMG"/>
                    </div>

                    <div className="login100-form validate-form">
					<span className="login100-form-title">
						REGISTRATION
					</span>

                        <div className="wrap-input100 validate-input"
                             data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" placeholder="Email"
                                   onChange={(e) => setEmail(e.target.value)}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="pass" placeholder="Password"
                                   value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button onClick={onSubmit} className="login100-form-btn">
                                Registration
                            </button>
                        </div>

                        <div className="text-center p-t-136">
                            <Link to={'/login'} className='txt2'>
                                Already have account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;