import backgroundImage from '../../../assets/images/background.jpg';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import './ResetPassword.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const loading = false;
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs reset-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login reset-password">Reset Password</div>
              </li>
            </ul>
            <div className="tab-item">
              <div className="auth-inner">
                <form className="reset-password-form">
                  <div className="form-input-container">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      labelText="New Password"
                      placeholder="New Password"
                    />
                    <Input
                      id="cpassword"
                      name="cpassword"
                      type="password"
                      labelText="Confirm Password"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <Button
                    label={`${loading ? 'RESET PASSWORD IN PROGRESS...' : 'RESET PASSWORD'}`}
                    className="auth-button button"
                    disabled={true}
                  />

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

export default ResetPassword;
