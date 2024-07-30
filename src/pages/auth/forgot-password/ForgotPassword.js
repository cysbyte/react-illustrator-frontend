import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '@pages/auth/forgot-password/ForgotPassword.scss';
import backgroundImage from '@assets/images/background.jpg';

const ForgotPassword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                <form className="forgot-password-form">
                  <div className="form-input-container">
                    <Input id="email" name="email" type="text" labelText="Email" placeholder="Enter Email" />
                  </div>
                  <Button label="FORGOT PASSWORD" className="auth-button button" disabled={true} />

                  <Link to={'/'}>
                    <span className="login">
                      <FaArrowLeft className="arrow-left" /> Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
