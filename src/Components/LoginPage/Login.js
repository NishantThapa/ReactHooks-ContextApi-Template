import React, { useContext } from 'react';
import { LoginContext } from '../../LoginContext'
import './login.css'
import { mailIcon, eyeIcon, enterIcon } from '../Common/Icons'

const LoginPage = () => {
	const { handleChange, value, signin } = useContext(LoginContext)
	return (
		<div className="login-page">
			<div className="login-form">
				<form className="login-form-main" action="">
					<div>
						<p style={{
							textAlign: "center",
							marginBottom: "50px",
							fontSize: "30px",
							fontWeight: "800",
							marginTop: "-30px"
						}}>
							LOGO
                       </p>
					</div>
					<div>
						<p className="login-header">Log In</p>
					</div>
					<div className="login-form-container">
						<div className="login-username">
							<input
								type="text"
								placeholder="example@gmail.com"
								name="email"
								//value={username}
								required
								onChange={handleChange} />
							<img className="loginIcon-mail"
								src={mailIcon}
								alt="mailIcon" />
						</div>
						<div className="login-password">
							<input
								type="password"
								placeholder="example123"
								name="password"
								required
								//value={password}
								onChange={handleChange} />
							<img
								className="loginIcon-eye"
								src={eyeIcon}
								alt="eyeIcon" />
						</div>
					</div>
					<div className="login-button-container">
						<p className="login-Common-font">Forget Password ?</p>
						<img className="Login-Btn" src={enterIcon} alt="enterIcon" onClick ={signin} />
					</div>
					<div className="Registor-link">
						<p className="login-Common-font reg">Dont have an Account ? <a href="#">Registor</a></p>
					</div>
				</form>
			</div>
		</div>

	)
}

export default LoginPage

